import React, {useState} from "react";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import moment from "moment-timezone";

import {getSteps} from "./utils";
import {ButtonsContainer} from "./components";
import styles from "./styles";
import ItemSettingsForm from "./ItemSettingsForm";
import SelectCatalogItems from "./SelectCatalogItems";
import SortCatalogItems from "./SortCatalogItems";
import {MENU_TYPE_EXPIRING} from "../consts";
import Spinner from "../Base/Spinner";
import {config} from "../../config";
import {TIMEZONE, routes} from "../../config";
import firebase, {useAuth} from "../../core/hooks/useFirebase";

const baseDefaults = {
  settings: {
    name: null,
    description: null,
    shippingType: "",
  },
  catalogItemIds: [],
};

export default function CreateItem({
  catalogItemsByCategory,
  store,
  handleClose,
  defaults=baseDefaults,
  parent,
}) {
  const defaultSelectedCatalogItems = {};
  Object.keys(catalogItemsByCategory).forEach(category => {
    const foo = [];
    Object.values(catalogItemsByCategory[category]).forEach((item, index) => {
      if (defaults.catalogItemIds.includes(item.id)) {
	foo.push(index);
      }
    });
    defaultSelectedCatalogItems[category] = foo;
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [
    selectedCatalogItemsByCategory,
    setSelectedCatalogItemsByCategory,
  ] = useState(defaultSelectedCatalogItems);
  const [expiryDateTime, handleExpiryDateTimeChange] = useState(
    moment().tz(TIMEZONE).add(7, "days"));
  const [settings, setSettings] = useState(defaults.settings);
  const steps = getSteps();
  const {control, errors, handleSubmit} = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const {db} = useAuth();

  const handleNext = async d => {
    setSettings(d);
    if (activeStep == 3) {
      setLoading(true);
      // FIRESTORE CRUD
      // BECHO PROTOCOL
      const menusRef = db.collection("menus");
      let finalCatalogItemIds = [];
      Object.keys(catalogItemsByCategory).forEach(category => {
	const foo = selectedCatalogItemsByCategory[category].map(
	  i => catalogItemsByCategory[category][i].id);
	finalCatalogItemIds = finalCatalogItemIds.concat(foo);
      });
      const tempBannerUrl = (bannerUrl) ? bannerUrl : store.bannerUrl;
      try {
	const createdAt = moment().unix();
	const menDoc = await menusRef.add({
	  bannerUrl: tempBannerUrl,
	  catalogItemIds: finalCatalogItemIds,
	  createdAt,
	  description: settings.description,
	  // expiresAt: expiryDateTime.unix(),
	  menuType: MENU_TYPE_EXPIRING,
	  name: settings.name,
	  shippingType: settings.shippingType,
	  storeid: store.id,
	});
	const menuDocRef = db.collection("menus").doc(menDoc.id);
	// This is the code for shareable url creation
	const protocol = window.location.protocol;
	const hostname = window.location.hostname;
	const port = window.location.port ? ":" + window.location.port: "";
	const endpoint = "/api/shortLink";
	const endpointUrl = `${protocol}//${hostname}${port}${endpoint}`;
	const {dynamicLinkBase} = config;
	// const dynamicLinkBase = `https://viluvainc.page.link/?link=${endpointUrl}/placeorders/`;
	const postOpts = {
	  longDynamicLink: `${dynamicLinkBase}${menDoc.id}&st=${settings.name}&sd=${settings.description}&si=${tempBannerUrl.split('&')[0]}`,
	};
	const fetchPostOpts = {
	  method: "post",
	  body: JSON.stringify(postOpts),
	};
	const foo = await fetch(endpointUrl, fetchPostOpts);
	const bar = await foo.json();
	await menuDocRef.update({shareableLink: bar.shortLink});
	firebase.analytics().logEvent("created_menu");
	if (parent == "Menus") {
	  handleClose();
	  setLoading(false);
	}
	if (parent == "CatalogItems"){
	  router.push(routes.MENUS);
	}
      } catch (e) {
	alert(`Error while saving the menu`);
      }
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleCatalogItemSelection = selectedCatalogItemsByCategory => {
    setSelectedCatalogItemsByCategory(selectedCatalogItemsByCategory);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  /*
    "Select Menu settings",
    "Select Menu Items",
    */
  const renderLabel = label => {
    if (label === 0) {
      return <SortCatalogItems
	catalogItemsByCategory={catalogItemsByCategory}
	/>;
    }
    if (label === 5) {
      return <ItemSettingsForm
	bannerUrl={bannerUrl}
	loading={loading}
	setBannerUrl={setBannerUrl}
	setLoading={setLoading}
	control={control}
	errors={errors}
	defaults={settings}
	expiryDateTime={expiryDateTime}
	handleExpiryDateTimeChange={handleExpiryDateTimeChange}
      />;
    }
    if (label === 1) {
      return <SelectCatalogItems
	catalogItemsByCategory={catalogItemsByCategory}
	handleItemSelection={handleCatalogItemSelection}
	defaults={defaults.catalogItems}
	selectedCatalogItemsByCategory={selectedCatalogItemsByCategory}
      />;
    }
    if (label === 2) {
      return <SelectCatalogItems
	catalogItemsByCategory={catalogItemsByCategory}
	handleItemSelection={handleCatalogItemSelection}
	defaults={defaults.catalogItems}
	selectedCatalogItemsByCategory={selectedCatalogItemsByCategory}
      />;
    }
    if (label === 3) {
      return <SelectCatalogItems
	catalogItemsByCategory={catalogItemsByCategory}
	handleItemSelection={handleCatalogItemSelection}
	defaults={defaults.catalogItems}
	selectedCatalogItemsByCategory={selectedCatalogItemsByCategory}
      />;
    }
  };

  if (loading) return <Spinner />;

  return (
    <div style={{border: "1px hidden white"}}>
      <Stepper style={styles.stepper} activeStep={activeStep} alternativeLabel>
	{steps.map((label) => (
	  <Step style={styles.step} key={label}>
	    <StepLabel>{label}</StepLabel>
	  </Step>
	))}
      </Stepper>
      {renderLabel(activeStep)}
      <div style={{height: 150}} />
      <ButtonsContainer>
	{activeStep === steps.length ? (
	  <div>
	    <Button onClick={handleReset}>Reset</Button>
	  </div>
	) : (
	  <div>
	    <div>
	      <Button
		disabled={activeStep === 0}
		onClick={handleBack}
	      >
		Back
	      </Button>
	      <Button
		style={styles.bottomButton}
		variant="contained"
		color="primary"
		onClick={handleSubmit(handleNext)}
	      >
		{activeStep === steps.length - 1 ? "Create" : "Next"}
	      </Button>
	    </div>
	  </div>
	)}
      </ButtonsContainer>
    </div>
  );
}

import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
import moment from "moment-timezone";

import {
  ItemPreviewContainer,
  NameContainer,
  DescContainer,
  ActionsContainer,
  DescriptionContainer,
  DetailsTopConatainer,
  ItemImage,
} from "./components";
import CreateItemDialog from "./CreateItemDialog";
import Dialog from "./Dialog";
import {MENU_TYPE_DEFAULT} from "../consts";
import {getCatalogItemPriceTag} from "../utils";
// import {TIMEZONE} from "../../config";

export default function ItemPreview({
  item,
  store,
  catalogItemsByCategory,
  catalogItemsLookUp,
}) {
  if (item === undefined) return null;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogParent, setDialogParent] = useState(null);
  const [dialogHeaderTitle, setDialogHeaderTitle] = useState("");
  const [createMenuDialogOpen, setCreateMenuDialogOpen] = useState(false);

  /*
  const expiresAtFormated = "expiresAt" in item ?
    moment.unix(item.expiresAt).tz(TIMEZONE).format("MM/DD/YYYY HH:mm") : "NA";
  */

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleCatalogClick = () => {
    setDialogParent("catalog");
    setDialogHeaderTitle(item.name);
    handleDialogOpen();
  };

  const handleCreateMenuDialogOpen = () => {
    setCreateMenuDialogOpen(true);
  };

  const handleCreateMenuDialogClose = () => {
    setCreateMenuDialogOpen(false);
  };

  const handleReplicateClick = () => {
    handleCreateMenuDialogOpen();
  };

  const defaults = {
    settings: {
      name: null,
      description: item.description,
      shippingType: item.shippingType,
    },
    catalogItemIds: item.catalogItemIds,
  };

  if (item.menuType === MENU_TYPE_DEFAULT) {
    item.name = store.name;
    item.description = store.description;
    item.catalogItemIds = Object.keys(catalogItemsLookUp);
  }
  /*
   *
	  {("expiresAt" in item) ? (<DescContainer>
	      Expires on: {expiresAtFormated} </DescContainer>
	    ) : null
	  }
   *
   */
  const catalogItemNamesArray = item.catalogItemIds.map(
    id => {
      const itm = catalogItemsLookUp[id];
      return `${itm.name} - ${getCatalogItemPriceTag(itm)}`;
    });
  const catalogItemNamesString = catalogItemNamesArray.join("\n");
  const waMessage = `${store.name}'s\n${item.name}\n${catalogItemNamesString}`;

  return (
    <ItemPreviewContainer>
      <DetailsTopConatainer>
	<ItemImage src={(item.bannerUrl) ? item.bannerUrl : item.storeBannerUrl} />
	<DescriptionContainer>
	  <NameContainer>{item.name.slice(0, 20)}</NameContainer>
	  <DescContainer>{item.description.slice(0, 35)}</DescContainer>
	  <DescContainer>
	    {(item.shippingType) ? item.shippingType : null}</DescContainer>
	  <DescContainer>
	    <a href={item.shareableLink} target="_blank">
	      {item.shareableLink}
	    </a>
	  </DescContainer>
	</DescriptionContainer>
      </DetailsTopConatainer>
      <ActionsContainer>
	<Button
	  size="small"
	  variant="outlined"
	  onClick={handleCatalogClick}
	>Catalog</Button>
	<Button
	  size="small"
	  variant="outlined"
	  color="primary"
	  onClick={handleReplicateClick}
	>Replicate</Button>
	<FacebookShareButton
	  url={item.shareableLink}
	  quote="link"
	  // beforeOnClick={handleSharingClick}
	  className="Demo__some-network__share-button">
	  <FacebookIcon
	    size={32}
	    round
	  />
	</FacebookShareButton>
	<WhatsappShareButton
	  url={item.shareableLink}
	  // beforeOnClick={handleSharingClick}
	  title={waMessage}
	  quote="link"
	  className="Demo__some-network__share-button">
	  <WhatsappIcon
	    size={32}
	    round
	  />
	</WhatsappShareButton>
      </ActionsContainer>
      <Dialog
	open={dialogOpen}
	handleClose={handleDialogClose}
	menu={item}
	menuid={item.id}
	parent={dialogParent}
	headerTitle={dialogHeaderTitle}
	catalogItemsLookUp={catalogItemsLookUp}
      />
      <CreateItemDialog
	open={createMenuDialogOpen}
	handleClose={handleCreateMenuDialogClose}
	catalogItemsByCategory={catalogItemsByCategory}
	store={store}
	defaults={defaults}
	parent="Menus"
      />
    </ItemPreviewContainer>
  );
}
/* Reference - DO NOT DELETE
	<Button
	  size="small"
	  variant="outlined"
	  color="secondary"
	  onClick={handleReportsClick}
	>Reports</Button>
	<Button
	  size="small"
	  variant="outlined"
	  color="primary"
	  onClick={handleCampaignClick}
	>Campaign</Button>

  const handleReportsClick = () => {
    setDialogParent("reports");
    setDialogHeaderTitle(item.name);
    handleDialogOpen();
  };
*/

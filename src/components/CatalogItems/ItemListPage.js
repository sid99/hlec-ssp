import React, {useEffect, useState} from "react";

import {
  HeaderContainer,
  ActionsContainer,
} from "./components";
import CreateItemDialog from "./CreateItemDialog";
import Item from "./Item";
import SampleItemList from "./SampleItemList";
import {getDictionary} from "./utils";
import FabButton from "../Base/FabButton";
import Spinner from "../Base/Spinner";
import CreateMenuDialog from "../Menus/CreateItemDialog";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
import firebase, {useAuth} from "../../core/hooks/useFirebase";
import protectRoute from "../../core/protectRoute";

const CatalogPage = () => {
  const [createCatalogItemOpen, setCreateCatalogItemOpen] = useState(false);
  const [createMenuDialogOpen, setCreateMenuDialogOpen] = useState(false);
  const [storeid, setStoreid] = useState(null);
  const [store, setStore] = useState(null);
  const [catalogItemsByCategory, setCatalogItemsByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user, db} = useAuth();
  const storesRef = db.collection("stores");
  const itemsRef = db.collection("catalogItems");

  // We use create item form on this page
  const headerTitle = "Catalog";
  const addItemButtonName = "Add Item";
  const createMenuButtonName = "Create Menu";

  useEffect(() => {
    firebase.analytics().logEvent("landed_cp");
    const fetchStoreItems = async () => {
      const storesQuery = storesRef.where("owner", "==", user.uid);
      const storesSnapshot = await storesQuery.get();
      const stores = storesSnapshot.docs.map(
	doc => ({id: doc.id, ...doc.data()}));
      const storeid = stores[0].id;
      const store = stores[0];
      setStoreid(storeid);
      setStore(store);
      const itemsQuery = itemsRef.where("storeid", "==", storeid);
      itemsQuery.onSnapshot(querySnapshot => {
	const items = querySnapshot.docs.map(
	  doc => ({id: doc.id, ...doc.data()}));
	const catalogItemsByCategory = getDictionary(items);
	setCatalogItemsByCategory(catalogItemsByCategory);
	setLoading(false);
      });
    };
    if (user) {
      fetchStoreItems();
    }
  }, [user]);

  const handleCreateCatalogItemDialogOpen = () => {
    setCreateCatalogItemOpen(true);
  };

  const handleCreateCatalogItemDialogClose = () => {
    setCreateCatalogItemOpen(false);
  };

  const handleCreateMenuDialogOpen = () => {
    setCreateMenuDialogOpen(true);
  };

  const handleCreateMenuDialogClose = () => {
    setCreateMenuDialogOpen(false);
  };

  const updateCatalogItem = async (id, data) => {
    await itemsRef.doc(id).update({...data});
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const doesCatalogHasItems = (Object.keys(catalogItemsByCategory).length > 0) ?
    true : false;

  const renderItemsByCategory = () => {
    return (
      <div>
	{Object.keys(catalogItemsByCategory).map(category => (
	  <div key={category}>
	    <HeaderContainer>{category}</HeaderContainer>
	    {catalogItemsByCategory[category].map(
	      item => <Item
		key={item.id}
		item={item}
		storeid={storeid}
		parent="catalog"
		updateCatalogItem={updateCatalogItem}
	      />)
	     }
	  </div>
	))}
      </div>
    );
  };

  if (loading) return <Spinner />;

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  {renderItemsByCategory()}
	  { (!doesCatalogHasItems) ? <SampleItemList /> : null}
	  <CreateItemDialog
	    open={createCatalogItemOpen}
	    handleClose={handleCreateCatalogItemDialogClose}
	    buttonName={addItemButtonName}
	    type="create"
	    storeid={storeid}
	    refreshPage={refreshPage}
	  />
	  <CreateMenuDialog
	    open={createMenuDialogOpen}
	    handleClose={handleCreateMenuDialogClose}
	    catalogItemsByCategory={catalogItemsByCategory}
	    store={store}
	    parent="CatalogItems"
	  />
	  <div style={{height: 150}} />
	  <ActionsContainer>
	    <FabButton
	      disabled={!doesCatalogHasItems}
	      onClick={handleCreateMenuDialogOpen}
	      buttonName={createMenuButtonName}
	    />
	    <FabButton
	      onClick={handleCreateCatalogItemDialogOpen}
	      buttonName={addItemButtonName}
	    />
	  </ActionsContainer>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default protectRoute(CatalogPage);

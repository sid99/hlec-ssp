import React, {useEffect, useState} from "react";
import _ from "lodash";

import {
  HeaderContainer,
  MenuListActionsContainer,
  ItemsContainer,
} from "./components";
import ItemPreview from "./ItemPreview.js";
import CreateItemDialog from "./CreateItemDialog";
import FabButton from "../Base/FabButton";
import Spinner from "../Base/Spinner";
import {MENU_TYPE_DEFAULT} from "../consts";
import {getDictionary} from "../CatalogItems/utils";
import protectRoute from "../../core/protectRoute";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
import firebase from "../../core/hooks/useFirebase";
import useStoreQuery from "../../hooks/useStoreQuery";
import useCatalogItemsQuery from "../../hooks/useCatalogItemsQuery";
import useMenusQuery from "../../hooks/useMenusQuery";

const headerTitle = "Menus";

// TODO: LookUp is Lookup
const ItemListPage = () => {
  const store = useStoreQuery();
  const {catalogItems, catalogItemsLookup} = useCatalogItemsQuery("both");
  const rawMenus = useMenusQuery("list");
  const catalogItemsByCategory = (catalogItems) ?
    getDictionary(catalogItems) : null;
  const [defaultMenus, userRawMenus] = _.partition(
	    rawMenus, {menuType: MENU_TYPE_DEFAULT});
  const defaultMenu = defaultMenus[0];
  const menus = userRawMenus.sort((a, b) => {
    return b.createdAt-a.createdAt;
  });
  const [createMenuDialogOpen, setCreateMenuDialogOpen] = useState(false);

  const createMenuButtonName = "Create Menu";

  useEffect(() => {
    firebase.analytics().logEvent("landed_mlp");
  });

  const handleCreateMenuDialogOpen = () => {
    setCreateMenuDialogOpen(true);
  };

  const handleCreateMenuDialogClose = () => {
    setCreateMenuDialogOpen(false);
  };

  console.log("========")
  console.log(store)
  console.log(catalogItemsLookup)
  console.log(menus)

  if (!catalogItems || !menus) return <Spinner />;

  // const baz = moment().unix();
  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <ItemsContainer>
	    <HeaderContainer>Default Menu</HeaderContainer>
	    <ItemPreview
	      item={defaultMenu}
	      store={store}
	      catalogItemsByCategory={catalogItemsByCategory}
	      catalogItemsLookUp={catalogItemsLookup}
	    />
	    <HeaderContainer>Your Menus</HeaderContainer>
	    {menus.map(menu => (
	      <ItemPreview
		key={menu.id}
		item={menu}
		store={store}
		catalogItemsByCategory={catalogItemsByCategory}
		catalogItemsLookUp={catalogItemsLookup}
	      />
	    ))}
	  </ItemsContainer>
	  <CreateItemDialog
	    open={createMenuDialogOpen}
	    handleClose={handleCreateMenuDialogClose}
	    catalogItemsByCategory={catalogItemsByCategory}
	    store={store}
	    parent="Menus"
	  />
	  <div style={{height: 150}} />
	  <MenuListActionsContainer>
	    <FabButton
	      onClick={handleCreateMenuDialogOpen}
	      buttonName={createMenuButtonName}
	    />
	  </MenuListActionsContainer>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default protectRoute(ItemListPage);

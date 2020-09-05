// will be used later to abstract the CatalogPage
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

import AddItemButton from "./AddItemButton";
import Item from "./Item";
import ItemFormDialog from "./ItemFormDialog";
import sampleItems from "./items";
import AppBar from "../Base/AppBar";
import {HeaderContainer} from "../Base/components";
import {
  MobilePageOuterContainer,
} from "../Base/MobilePageContainers";
import {useAuth} from "../../core/hooks/useFirebase";


export default function Main() {
  const router = useRouter();
  const {storeid} = router.query;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {db} = useAuth();

  useEffect(() => {
    const fetchItems = () => {
      const itemsRef = db.collection(
	"stores").doc(storeid).collection("items");
      itemsRef.onSnapshot(querySnapshot => {
	const items = querySnapshot.docs.map(
	  doc => ({id: doc.id, ...doc.data()}));
	setItems(items);
	setLoading(false);
      });
    };
    if (storeid) {
      fetchItems();
    }
  }, [storeid]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // We use create item form on this page
  const headerTitle = "Your Catalog";
  const dialogHeaderTitle = "Add Item";
  const buttonName = "Add Item";

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<HeaderContainer> Sample </HeaderContainer>
	{sampleItems.map(item => <Item key={item.name} item={item} />)}
      </MobilePageOuterContainer>
      <ItemFormDialog
	open={dialogOpen}
	handleClose={handleDialogClose}
	headerTitle={dialogHeaderTitle}
	buttonName={buttonName}
	type="create"
	storeid={storeid}
      />
      <AddItemButton onClick={handleDialogOpen} />
    </>
  );
}

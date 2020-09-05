import {useEffect, useState} from "react";

import useStoreQuery from "./useStoreQuery";
import {getLookUp} from "../components/CatalogItems/utils";
import {useAuth} from "../core/hooks/useFirebase";

const useCatalogItemsQuery = dataType => {
  const {db} = useAuth();
  const store = useStoreQuery();
  const [catalogItems, setCatalogItems] = useState(undefined);
  const [catalogItemsLookup, setCatalogItemsLookUp] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const catalogItemsRef = db.collection("catalogItems");
      const catalogItemsQuery = catalogItemsRef.where(
	"storeid", "==", store.id);
      const unsubscribeCatalogItems = catalogItemsQuery
	.onSnapshot(querySnapshot => {
	  const catalogItems = querySnapshot.docs.map(
	    doc => ({id: doc.id, ...doc.data()}));
	  setCatalogItems(catalogItems);
	  const catalogItemsLookup = getLookUp(catalogItems);
	  console.log("===== hereh againa =====");
	  console.log(catalogItemsLookup);
	  setCatalogItemsLookUp(catalogItemsLookup);
	});
      return unsubscribeCatalogItems;
    };
    if (store) {
      fetch();
    }
  }, [store]);

  if (dataType === "list") return catalogItems;
  if (dataType === "lookup") return catalogItemsLookup;
  console.log("check it")
  if (dataType === "both") return {catalogItems, catalogItemsLookup};
};

export default useCatalogItemsQuery;

import {useEffect, useState} from "react";

import useStoreQuery from "./useStoreQuery";
import {getLookUp} from "../components/CatalogItems/utils";
import {useAuth} from "../core/hooks/useFirebase";

const useMenusQuery = dataType => {
  const {db} = useAuth();
  const store = useStoreQuery();
  const [menus, setMenus] = useState(undefined);
  const [menusLookup, setMenusLookup] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const menusRef = db.collection("menus");
      const menusQuery = menusRef.where(
	"storeid", "==", store.id)
      const unsubscribeMenus = menusQuery
	.onSnapshot(querySnapshot => {
	  const rawMenus = querySnapshot.docs.map(
	    doc => ({id: doc.id, ...doc.data()}));
	  setMenus(rawMenus);
	  const menusLookup = getLookUp(rawMenus);
	  setMenusLookup(menusLookup);
	});
    };
    if (store) {
      fetch();
    }
  }, [store]);

  if (dataType === "list") return menus;
  if (dataType === "lookup") return menusLookup;
  if (dataType === "both") return {menus, menusLookup};
};

export default useMenusQuery;

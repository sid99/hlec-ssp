import {useEffect, useState} from "react";

import useStoreQuery from "./useStoreQuery";
import {getLookUp} from "../components/CatalogItems/utils";
import {useAuth} from "../core/hooks/useFirebase";

const useCatalogItemsQuery = dataType => {
  const {db} = useAuth();
  const store = useStoreQuery();
  const [members, setMembers] = useState(undefined);
  const [membersLookup, setMembersLookup] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const membersRef = db.collection("members");
      const membersQuery = membersRef.where(
	"storeid", "==", store.id);
      const unsubscribeMembers = membersQuery
	.onSnapshot(querySnapshot => {
	  const members = querySnapshot.docs.map(
	    doc => ({id: doc.id, ...doc.data()}));
	  setMembers(members);
	  const membersLookup = getLookUp(members);
	  setMembersLookup(membersLookup);
	});
      return unsubscribeMembers;
    };
    if (store) {
      fetch();
    }
  }, [store]);

  if (dataType === "list") return members;
  if (dataType === "lookup") return membersLookup;
  if (dataType === "both") return {members, membersLookup};
};

export default useCatalogItemsQuery;

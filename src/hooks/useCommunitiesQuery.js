import {useEffect, useState} from "react";

import useStoreQuery from "./useStoreQuery";
import {getLookUp} from "../components/CatalogItems/utils";
import {useAuth} from "../core/hooks/useFirebase";

const useCatalogItemsQuery = dataType => {
  const {db} = useAuth();
  const store = useStoreQuery();
  const [communities, setCommunities] = useState(undefined);
  const [communitiesLookup, setCommunitiesLookup] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const communitiesRef = db.collection("communities");
      const communitiesQuery = communitiesRef.where(
	"storeid", "==", store.id);
      const unsubscribeCommunities = communitiesQuery
	.onSnapshot(querySnapshot => {
	  const communities = querySnapshot.docs.map(
	    doc => ({id: doc.id, ...doc.data()}));
	  setCommunities(communities);
	  const communitiesLookup = getLookUp(communities);
	  setCommunitiesLookup(communitiesLookup);
	});
      return unsubscribeCommunities;
    };
    if (store) {
      fetch();
    }
  }, [store]);

  if (dataType === "list") return communities;
  if (dataType === "lookup") return communitiesLookup;
  if (dataType === "both") return {communities, communitiesLookup};
};

export default useCatalogItemsQuery;

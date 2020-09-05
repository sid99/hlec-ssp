import {useEffect, useState} from "react";

import {useAuth} from "../core/hooks/useFirebase";

const useStoreQuery = () => {
  const {user, db} = useAuth();
  const [store, setStore] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const storesRef = db.collection("stores");
      const storesQuery = storesRef.where("owner", "==", user.uid);
      const storesSnapshot = await storesQuery.get();
      const stores = storesSnapshot.docs.map(
	doc => ({id: doc.id, ...doc.data()}));
      const store = stores[0];
      console.log("heuy u");
      setStore(store);
    };
    if (user) {
      fetch();
    }
  }, [user]);

  return store;
};

export default useStoreQuery;

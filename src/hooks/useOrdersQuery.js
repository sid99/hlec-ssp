import {useEffect, useState} from "react";

import useStoreQuery from "./useStoreQuery";
import {useAuth} from "../core/hooks/useFirebase";
import getOrdersQuery from "./getOrdersQuery";

const useOrdersQuery = queryType => {
  const {db} = useAuth();
  const store = useStoreQuery();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const ordersQuery = getOrdersQuery(db, store, queryType);
      const unsubscribeOrders = ordersQuery
	.onSnapshot(querySnapshot => {
	  const rawOrders = querySnapshot.docs.map(
	    doc => ({id: doc.id, ...doc.data()}));
	  rawOrders.sort((a, b) => {
	    return b.createdAt-a.createdAt;
	  });
	  setOrders(rawOrders);
	});
      return unsubscribeOrders;
    };
    if (store) {
      fetch();
    }
  }, [store]);

  return orders;
};

export default useOrdersQuery;

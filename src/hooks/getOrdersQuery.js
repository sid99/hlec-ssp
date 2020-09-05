import {
  ORDER_CANCELLED_STATUS_CANCELLED,
  ORDER_CANCELLED_STATUS_NOT_CANCELLED,
  ORDER_PAYMENT_STATUS_NOT_PAID,
  ORDER_PAYMENT_STATUS_PAID,
} from "../components/consts";

export default (db, store, queryType) => {
  const ordersRef = db.collection("orders");

  if (queryType === "cancelled") {
    const ordersQuery = ordersRef
      .where("storeid", "==", store.id)
      .where("cancelStatus", "==", ORDER_CANCELLED_STATUS_CANCELLED);
    return ordersQuery;
  }

  if (queryType === "live") {
    const ordersQuery = ordersRef
      .where("storeid", "==", store.id)
      .where("cancelStatus", "==", ORDER_CANCELLED_STATUS_NOT_CANCELLED);
    return ordersQuery;
  }

  if (queryType === "settled") {
    const ordersQuery = ordersRef
      .where("storeid", "==", store.id)
      .where("paymentStatus", "==", ORDER_PAYMENT_STATUS_PAID)
      .where("orderStatusFour", "==", true);
    return ordersQuery;
  }

  if (queryType === "unsettled") {
    const ordersQuery = ordersRef
      .where("storeid", "==", store.id)
      .where("paymentStatus", "==", ORDER_PAYMENT_STATUS_NOT_PAID)
      .where("orderStatusFour", "==", true);
    return ordersQuery;
  }

  if (queryType === "next") {
    const ordersQuery = ordersRef
      .where("storeid", "==", store.id)
      .where("orderStatusOne", "==", true);
    return ordersQuery;
  }
};

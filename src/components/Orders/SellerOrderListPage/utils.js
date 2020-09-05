import {
  getFormattedOrderDetails,
  getShortOrderId,
} from "../../utils";

/*
Short Order ID
Customer name
Phone number
Address
Items-wise order quantity
Full order details
Total sale value
Item-wise price (per min order qty)
payment status
fulfillment status
*/
// TODO: rename to customer and merchant everywhere
// TODO: rename orderItems to catalogItems
export const createOrderReports = (orders, catalogItemsLookUp) => {
  const reports = [];
  // composing ordered catalog item ids
  const allOrderedCatalogItemIds = orders.map(
    order => (Object.keys(order.orderItems)));
  const orderedCatalogItemIds = [...new Set(allOrderedCatalogItemIds.flat())];

  orders.forEach(order => {
    const formattedOrder = {};
    const customerName = ("buyerName" in order) ? order.buyerName : "";
    const total = ("total" in order) ? order.total : "";
    const phoneNumber = (
      "buyerPhoneNumber" in order) ? order.buyerPhoneNumber : "";
    const address = ("buyerAddress" in order) ? order.buyerAddress : "";

    formattedOrder["order id"] = getShortOrderId(order.id);
    formattedOrder["customer name"] = customerName;
    formattedOrder["phone number"] = phoneNumber;
    formattedOrder["address"] = address;

    // item wise order quantity
    orderedCatalogItemIds.forEach(itemId => {
      let name;
      let orderQuantity;

      const orderItem = order.orderItems[itemId];
      if (orderItem) {
	name = orderItem.name;
	orderQuantity = orderItem.orderQuantity;
      } else {
	name = ("itemId" in catalogItemsLookUp) ? catalogItemsLookUp[itemId].name : "Missing";
	orderQuantity = "";
      }
      const columnName = `${name} quantity`;
      formattedOrder[columnName] = orderQuantity;
    });

    formattedOrder["order details"] = getFormattedOrderDetails(order);
    formattedOrder["total sale value"] = total;

    // item wise price
    orderedCatalogItemIds.forEach(itemId => {
      let name;
      let price;

      const orderItem = order.orderItems[itemId];
      if (orderItem) {
	name = orderItem.name;
	price = orderItem.price;
      } else {
	name = catalogItemsLookUp[itemId].name;
	price = "";
      }
      const columnName = `${name} price`;
      formattedOrder[columnName] = price;
    });

    formattedOrder["payment status"] = order.paymentStatus;
    formattedOrder["fulfillment status"] = order.orderStatusFour;

    reports.push(formattedOrder);
  });

  return reports;
};

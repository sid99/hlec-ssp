export const getFormattedCatalogItemUnit = unit => {
  if (unit === "Numbers") return "Each";
  if (unit === "Kilograms") return "Kg";
  if (unit === "Grams") return "gms";
};

export const getCatalogItemPriceTag = item => {
  const minQty = item.minimumPurchasableQuantity;
  const formattedUnit = getFormattedCatalogItemUnit(item.unit);
  const priceTag = `INR ${item.price}/${minQty} ${formattedUnit}`;
  return priceTag;
};

// TODO: move this to order creation
export const getShortOrderId = orderId => (orderId.slice(0, 5).toUpperCase());

export const getFormattedOrderDetails = order => {
  let formattedOrderDetails = "";
  const orderItems = order.orderItems;

  Object.keys(orderItems).forEach(itemId => {
    const orderItem = orderItems[itemId];
    const orderQuantity = orderItem.orderQuantity;
    const name = orderItem.name;
    if (formattedOrderDetails.length > 1) {
      formattedOrderDetails = `${formattedOrderDetails}\n${orderQuantity} x ${name}`;
    } else {
      formattedOrderDetails = `${orderQuantity} x ${name}`;
    }
  });

  return formattedOrderDetails;
};

export const getDictionaryById = list => {
  const map = {};
  for (let i = 0; i < list.length; ++i) {
    const id = list[i].id;
    map[id] = list[i];
  }
  return map;
};

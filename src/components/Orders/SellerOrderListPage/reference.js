/*
 *

	    {filteredOrders.map(
	      item => (
		<ItemPreview
		  key={item.id}
		  item={item}
		  store={store}
		  menu={menuLookup[item.menuid]}
		  />))
	    }

  const paymentFilteredOrders = filteredOrders.filter(order => {
    if (paymentFilter.options.includes(order.paymentStatus.toLowerCase())) {
      return true;
    }
  });
  const paymentFilter = {
    header: "Payment Status",
    options: [
      "paid",
      "not paid",
    ],
    defaults: [
      "paid",
      "not paid",
    ],
  };

  const statusFilter = {
    header: "Status",
    options: [
      "places",
      "confirmed",
    ],
    defaults: [
      "places",
      "confirmed",
    ],
  };

*/

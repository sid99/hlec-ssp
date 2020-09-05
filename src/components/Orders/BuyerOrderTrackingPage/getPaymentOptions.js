export default (
  name,
  description,
  amount,
  buyerName,
  buyerContact,
  razorpayOrderId,
  razorpayKeyId,
  handler,
) => ({
  key: razorpayKeyId,
  amount,
  currency: "INR",
  name,
  description,
  image: "https://example.com/your_logo",
  order_id: razorpayOrderId,
  handler: function(response) {
    // alert(response.razorpay_payment_id);
    handler();
  },
  prefill: {
    name: buyerName,
    contact: buyerContact,
    // email: "demo@demo.com",
  },
  theme: {
    // color: "blue",
    hide_topbar: false,
  },
  external: {
    wallets: ["paytm", "amazonpay"],
    handler: function(response) {
      // alert(response.razorpay_payment_id);
      handler();
    },
  },
});
/*
  notes: {
    address: "some address",
  },
*/

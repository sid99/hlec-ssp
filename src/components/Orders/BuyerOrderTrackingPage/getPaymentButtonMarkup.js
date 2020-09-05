const getPaymentButtonMarkup = () => {
  return {__html:
    `<form id="payment" style="border:'1px solid black';color:blue;font-size=30" action="https://www.example.com/payment/success/" method="POST">
      <script
	src="https://checkout.razorpay.com/v1/checkout.js"
	data-key="rzp_test_WI02xC82gB4woe" // Key ID
	data-amount="50000" // Amount in currency subunits
	data-currency="INR"
	data-order_id="order_FTZcmcs2B6NIAm"// Order ID
	data-buttontext="PAY TO IVORY ROOTS"
	data-name="Acme Corp"
	data-description="Test transaction"
	data-prefill.name="Gaurav Kumar"
	data-prefill.email="gaurav.kumar@example.com"
	data-prefill.contact="9999999999"
	data-theme.color="#F37254"
      >
      </script>
      <input type="hidden" custom="Hidden Element" name="hidden">
    </form>`,
  };
};

export default getPaymentButtonMarkup;

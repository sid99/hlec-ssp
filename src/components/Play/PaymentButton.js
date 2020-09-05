import React, {useEffect, useRef} from "react";
import Button from "@material-ui/core/Button";

function QuoteApp() {
  const payForm = useRef(null);

  useEffect(() => {
    if (payForm) {
      // payForm.current.click();
      // console.log(ReactDOM.findDOMNode("form"));
      // console.log(document.getElementById('payment').click())
      document.getElementById('payment').click();
    }

  }, [payForm]);

  function createMarkup() {
    return {__html: `<form id="payment" style="border:'1px solid black';color:blue;font-size=30" action="https://www.example.com/payment/success/" method="POST">
<script
    src="https://checkout.razorpay.com/v1/checkout.js"
    data-key="rzp_test_WI02xC82gB4woe" // Enter the Key ID generated from the Dashboard
    data-amount="50000" // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    data-currency="INR"
    data-order_id="order_FTZcmcs2B6NIAm"//This is a sample Order ID. Pass the id obtained in the response of the previous step.
    data-buttontext="PAY TO IVORY ROOTS"
    data-name="Acme Corp"
    data-description="Test transaction"
    data-prefill.name="Gaurav Kumar"
    data-prefill.email="gaurav.kumar@example.com"
    data-prefill.contact="9999999999"
    data-theme.color="#F37254"
>
var foo = document.getElementsByClassName('razorpay-payment-button')[0];
console.log("asdas");
function baz() {
  foo.innerHTML = "BAR";
  }
  window.onload = baz;
</script>
<input type="hidden" custom="Hidden Element" name="hidden">
</form>`};
  }

  // <body onload="document.getElementsByClassName('razorpay-payment-button')[0].click();">
  const handleClick = () => {
    console.log("here");
    // console.log(payForm.current.getElementById("payment"));
    // document.getElementById("payment").click();
    // payForm.current.form.click();
    // console.log(document.getElementById("payment"));
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClick} >Default</Button>
      <div onClick={handleClick} ref={payForm} dangerouslySetInnerHTML={createMarkup()} />;
    </div>
  );
}

export default QuoteApp;

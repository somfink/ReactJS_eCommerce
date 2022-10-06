import "./CheckoutMarkup.scss";

const CheckoutMarkup = ({ checkout }) => {
  return (
    <div className="checkout-centered">
      <div className="checkout-markup">
        <div
          className={`checkout-label ${
            checkout.showCartSummary ? "active" : ""
          }`}
        >
          <span>1</span>
        </div>
        <div
          className={`checkout-label ${
            checkout.showCheckoutForm ? "active" : ""
          }`}
        >
          <span>2</span>
        </div>
        <div
          className={`checkout-label ${
            checkout.showCheckoutSummary ? "active" : ""
          }`}
        >
          <span>3</span>
        </div>
        <div className={`checkout-label ${checkout.endOrder ? "active" : ""}`}>
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMarkup;

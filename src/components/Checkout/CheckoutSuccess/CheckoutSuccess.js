import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CheckoutSuccess.scss";

const CheckoutSuccess = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const orderNumber = Math.floor(Math.random() * 100000000);

  return (
    <div className="checkoutSuccess">
      <h3 className="checkoutSuccess-title">Your payment was successful!</h3>
      <p className="checkoutSuccess-confirmation">
        We sent an email to your inbox confirming the purchase no. &nbsp;{" "}
        {orderNumber}.
      </p>
      <p className="checkoutSuccess-confirmation">
        We will inform you about the next steps in processing your order by
        email.
      </p>
      <p className="checkoutSuccess-confirmation">
        If you have any questions about your order or other products, please
        feel free to contact us.
      </p>
      <p className="checkoutSuccess-confirmation">
        We hope you will visit our store again in a short time!
      </p>
      <div className="checkoutSuccess-btn">
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

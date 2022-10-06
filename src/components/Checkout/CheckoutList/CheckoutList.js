import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import CartTotalAmount from "../../Cart/CartTotalAmount/CartTotalAmount";
import Button from "../../UI/Button/Button";

import "./CheckoutList.scss";

const CheckoutList = ({ onClick }) => {
  return (
    <section className="cartCheckout">
      <h4 className="cartCheckout-heading">Your Cart</h4>
      <Cart className="cartCheckout-list" />
      <CartTotalAmount />
      <div className="cartCheckout-btn">
        <Link to='/'>Home Page</Link>
        <Button onClick={onClick}>Go to Delivery</Button>
      </div>
    </section>
  );
};

export default CheckoutList;

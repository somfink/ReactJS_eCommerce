import "./Cart.scss";
import CartList from "./CartList/CartList";

const Cart = ({ className }) => {

  return <div className={`cart-modal ${className}`}>
    <CartList />
  </div>;
};

export default Cart;

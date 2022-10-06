import { useContext } from "react";
import CartContext from "../../../store/CartContext/CartContext";
import "./CartTotalAmount.scss";

const CartTotalAmount = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}$`;

  const cartItemsHandler = () => {
    if (cartCtx.items.length <= 0) {
      return <p className="cart-total__info">Cart is empty.</p>;
    }
    if (cartCtx.items.length > 0) {
      return (
        <div className="cart-total__amount">
          <span>Total: </span>
          <span>{totalAmount}</span>
        </div>
      );
    }
  };

  return <>{cartItemsHandler()}</>;
};

export default CartTotalAmount;

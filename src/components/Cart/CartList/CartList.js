import { useContext } from "react";

import { BsTrash } from "react-icons/bs";
import CartContext from "../../../store/CartContext/CartContext";
import "./CartList.scss";

const CartList = () => {
  const cartCtx = useContext(CartContext);

  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const showCartItems = () => {
    if (cartCtx.items && cartCtx.items.length > 0) {
      return cartCtx.items.map((item) => (
        <li className="cart-list__items" key={item.id}>
          <span>{item.title}</span>
          <div className="cart-list__description">
            <span>{`x${item.amount}`}</span>
            <span>{`${cartCtx.productPriceFill(item.price)}`}</span>
            <BsTrash onClick={removeFromCartHandler.bind(null, item.id)} />
          </div>
        </li>
      ));
    }
  };

  return <ul className="cart-list">{showCartItems()}</ul>;
};

export default CartList;

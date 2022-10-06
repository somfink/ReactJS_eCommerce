import React, { useReducer } from "react";
import { CART_ACTION } from "../../reducers/CartReducer/CartActionTypes";
import {
  CartReducer,
  CART_INIT_STATE,
} from "../../reducers/CartReducer/CartReducer";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  showCartModal: false,
  onShowCartModal: () => {},
  onCloseCartModal: () => {},
  onCheckoutRemoveItem: () => {},
  productPriceFill: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, CART_INIT_STATE);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: CART_ACTION.ADD, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: CART_ACTION.REMOVE, id: id });
  };

  const showModalCartHandler = () => {
    dispatchCart({ type: CART_ACTION.SHOW_MODAL, value: true });
  };

  const closeModalCartHandler = () => {
    dispatchCart({ type: CART_ACTION.CLOSE_MODAL, value: false });
  };

  const removeItemAfterCheckout = () => {
    dispatchCart({ type: CART_ACTION.ORDER });
  };

  const productPrice = (price) => {
    const priceIndex = price.toString().indexOf(".");
    if (
      price.toString().includes(".") &&
      priceIndex + 2 === price.toString().length
    ) {
      return `$${price.toString()}0`;
    }
    if (!price.toString().includes(".")) {
      return `$${price.toString()}.00`;
    }
    return `$${price.toString()}`;
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        showCartModal: cartState.showCartModal,
        onShowCartModal: showModalCartHandler,
        onCloseCartModal: closeModalCartHandler,
        onCheckoutRemoveItem: removeItemAfterCheckout,
        productPriceFill: productPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

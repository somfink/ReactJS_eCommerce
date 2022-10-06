import { CART_ACTION } from "./CartActionTypes";

export const CART_INIT_STATE = {
  items: [],
  totalAmount: 0,
  showCartModal: false,
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTION.ADD:
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const addCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[addCartItemIndex];

      let updatedItemsAdd;

      console.log(state.items);

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItemsAdd = [...state.items];
        updatedItemsAdd[addCartItemIndex] = updatedItem;
      } else {
        updatedItemsAdd = state.items.concat(action.item);
      }

      return {
        ...state,
        items: updatedItemsAdd,
        totalAmount: updatedTotalAmount,
      };

    case CART_ACTION.REMOVE:
      const removeCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const removeCartItem = state.items[removeCartItemIndex];
      const updatedRemovedTotalAmount =
        state.totalAmount - removeCartItem.price;

      let updatedItemsRemove;

      if (removeCartItem.amount === 1) {
        updatedItemsRemove = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedItem = {
          ...removeCartItem,
          amount: removeCartItem.amount - 1,
        };

        updatedItemsRemove = [...state.items];
        updatedItemsRemove[removeCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItemsRemove,
        totalAmount: updatedRemovedTotalAmount,
      };
    case CART_ACTION.ORDER:
      return CART_INIT_STATE;

    case CART_ACTION.SHOW_MODAL:
      return { ...state, showCartModal: action.value };

    case CART_ACTION.CLOSE_MODAL:
      return { ...state, showCartModal: action.value };

    default:
      return CART_INIT_STATE;
  }
};

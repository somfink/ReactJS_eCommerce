import { CHECKOUT_ACTION } from "./CheckoutActionTypes";

export const CHECKOUT_INIT_STATE = {
  orderDetails: {},
  showCartSummary: true,
  showCheckoutForm: false,
  showCheckoutSummary: false,
  endOrder: false,
};

export const CheckoutReducer = (state, action) => {
  switch (action.type) {
    case CHECKOUT_ACTION.GO_TO_DELIVERY:
      return {
        ...state,
        showCartSummary: false,
        showCheckoutForm: true,
        showCheckoutSummary: false,
      };

    case CHECKOUT_ACTION.GO_TO_SUMMARY:
      return {
        ...state,
        showCheckoutForm: false,
        showCheckoutSummary: true,
      };
    case CHECKOUT_ACTION.GO_TO_PAYMENT:
      return {
        ...state,
        showCheckoutSummary: false,
        endOrder: true,
      };
    case CHECKOUT_ACTION.SUCCESS:
      return CHECKOUT_INIT_STATE;

    default:
      return CHECKOUT_INIT_STATE;
  }
};

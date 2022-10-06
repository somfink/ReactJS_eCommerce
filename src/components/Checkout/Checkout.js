import { useContext, useReducer, useEffect } from "react";
import ScrollContext from "../../store/ScrollContext/ScrollContext";
import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutList from "./CheckoutList/CheckoutList";
import {
  CheckoutReducer,
  CHECKOUT_INIT_STATE,
} from "../../reducers/CheckoutReducer/CheckoutReducer";
import { CHECKOUT_ACTION } from "../../reducers/CheckoutReducer/CheckoutActionTypes";
import CheckoutMarkup from "./CheckoutMarkup/CheckoutMarkup";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import { CheckoutContextProvider } from "../../store/CheckoutFormContext/CheckoutFormContext";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";
import CartContext from "../../store/CartContext/CartContext";

const Checkout = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }, []);

  const scrollCtx = useContext(ScrollContext);
  const cartCtx = useContext(CartContext);

  const [checkout, dispatchCheckout] = useReducer(
    CheckoutReducer,
    CHECKOUT_INIT_STATE
  );

  const checkoutInitStateHandler = (e) => {
    e.preventDefault();
    dispatchCheckout({ type: CHECKOUT_ACTION.SUCCESS });
  };

  const checkoutListHandler = (e) => {
    e.preventDefault();
    if (cartCtx.items.length > 0) {
      dispatchCheckout({
        type: CHECKOUT_ACTION.GO_TO_DELIVERY,
      });
      return;
    }
    alert("You must add something to cart!");
  };

  const checkoutFormHandler = () => {
    dispatchCheckout({ type: CHECKOUT_ACTION.GO_TO_SUMMARY });
  };

  const checkoutSummaryHandler = (e) => {
    e.preventDefault();
    cartCtx.onCheckoutRemoveItem();
    dispatchCheckout({ type: CHECKOUT_ACTION.GO_TO_PAYMENT });
  };

  return (
    <CheckoutContextProvider>
      <section
        className={`checkout ${scrollCtx.scrollPosition > 5 ? "mt-lg" : ""}`}
      >
        <h2 className="checkout-heading">Checkout</h2>
        <main className="checkout-form">
          <CheckoutMarkup checkout={checkout} />
          <div className="checkout-content">
            {checkout.showCartSummary && (
              <CheckoutList onClick={checkoutListHandler} />
            )}
            {checkout.showCheckoutForm && (
              <CheckoutForm
                onClick={checkoutFormHandler}
                onBackClick={checkoutInitStateHandler}
              />
            )}
            {checkout.showCheckoutSummary && (
              <CheckoutSummary
                onClick={checkoutSummaryHandler}
                onBackClick={checkoutListHandler}
              />
            )}
            {checkout.endOrder && <CheckoutSuccess />}
          </div>
        </main>
      </section>
    </CheckoutContextProvider>
  );
};

export default Checkout;

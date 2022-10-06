import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../store/CartContext/CartContext";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Cart from "../Cart";
import CartTotalAmount from "../CartTotalAmount/CartTotalAmount";
import "./CartModal.scss";

const CartModal = ({ className }) => {
  const modalCtx = useContext(CartContext);

  const cartCheckoutHandler = () => {
    if (modalCtx.items.length > 0) {
      return modalCtx.onCloseCartModal();
    }
    alert("Add something to cart!");
  };

  const btnContent = () => {
    if (modalCtx.items.length <= 0) {
      return "Go to checkout";
    }
    if (modalCtx.items.length > 0) {
      return (
        <Link to="/checkout" className="cart-btn__checkout">
          Go to checkout
        </Link>
      );
    }
  };

  return (
    <Modal className={`cart ${className}`}>
      <section className="cart-items">
        <Cart className='cart-items__list'/>
        <CartTotalAmount />
      </section>
      <section className="cart-btn">
        <Button onClick={modalCtx.onCloseCartModal}>Close</Button>
        <Button onClick={cartCheckoutHandler}>{btnContent()}</Button>
      </section>
    </Modal>
  );
};

export default CartModal;

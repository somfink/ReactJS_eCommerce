import { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../../store/CartContext/CartContext";

import Card from "../Card/Card";
import "./Modal.scss";

const Modal = ({ children, className }) => {
const modalCtx = useContext(CartContext);

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="modal-backdrop" onClick={modalCtx.onCloseCartModal}></div>
          <Card className={`modal ${className}`}>{children}</Card>
        </>,
        document.getElementById("modal-cart")
      )}
    </>
  );
};

export default Modal;

import { useContext } from "react";
import CartContext from "../../../store/CartContext/CartContext";
import "./CheckoutSummaryProducts.scss";

const CheckoutSummaryProducts = () => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      {cartCtx.items.map((product) => (
        <li className="checkoutSummary-product" key={product.id}>
          <span>{product.title}</span>
          <div className="checkoutSummary-product__description">
            <span>{`x${product.amount}`}</span>
            <span>{`${cartCtx.productPriceFill(product.price)}`}</span>
          </div>
        </li>
      ))}
      <li className="checkoutSummary-product__total">
        <p>Total: {`${cartCtx.totalAmount.toFixed(2)}$`}</p>
      </li>
    </>
  );
};

export default CheckoutSummaryProducts;

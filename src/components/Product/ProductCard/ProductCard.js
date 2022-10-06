import Card from "../../UI/Card/Card";
import { MdAddShoppingCart } from "react-icons/md";
import "./ProductCard.scss";
import { useContext } from "react";
import CartContext from "../../../store/CartContext/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ description, image, price, title, id }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      price: price,
      title: title,
      amount: +1,
    });
  };

  // const productPrice = `$${price}`;

  const shortTitle = title.slice(0, 70) + `${title.length > 70 ? "..." : ""}`;

  const shortDescrpition =
    description.slice(0, 130) + `${description.length > 130 ? "..." : ""}`;

  return (
    <Card className="product">
      <Link to={`product-details/${id}`} className="product-link">
        <figure className="product-img">
          <img src={image} alt="" />
          <figcaption className="product-img__description">
            <span>{shortTitle}</span>
            <span>{cartCtx.productPriceFill(price)}</span>
          </figcaption>
        </figure>
        <div className="product-description">
          <p>{shortDescrpition}</p>
        </div>
      </Link>
      <div className="product-addToCart__icon">
        <MdAddShoppingCart onClick={addToCartHandler} />
      </div>
    </Card>
  );
};

export default ProductCard;

import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

import CartContext from "../../../store/CartContext/CartContext";
import ScrollContext from "../../../store/ScrollContext/ScrollContext";
import Button from "../../UI/Button/Button";
import "./ProductDetails.scss";

const ProductDetails = ({ productsDetails }) => {
  const { id } = useParams();
  const scrollCtx = useContext(ScrollContext);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }, []);

  const { category, description, image, price, rating, title } =
    productsDetails[id - 1];

  const ratingRate = `Rating: ${rating.rate}/5`;
  const ratingCount = `(${rating.count})`;

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: +id,
      price: price,
      title: title,
      amount: +1,
    });
  };

  return (
    <main className={`details ${scrollCtx.scrollPosition > 5 ? "mt-lg" : ""}`}>
      <figure className="details-image">
        <Link to="/" className="details-image__return">
          <IoMdArrowRoundBack />
        </Link>
        <img src={image} alt="" />
        <figcaption className="details-image__description">
          <span>{title}</span>
          <span>{cartCtx.productPriceFill(price)}</span>
        </figcaption>
      </figure>
      <section className="details-info">
        <div className="details-info__review">
          <div className="details-info__category">
            <span>Product category:</span>
            <span>{category}</span>
          </div>
          <div className="details-info__rating">
            <span>{ratingRate}</span>
            <span>{ratingCount}</span>
          </div>
        </div>
        <div className="details-info__description">
          <p>{description}</p>
        </div>
        <div className="details-info__btn">
          <Button onClick={addToCartHandler}>Add to cart</Button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;

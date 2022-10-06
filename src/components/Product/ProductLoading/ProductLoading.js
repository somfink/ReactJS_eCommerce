import { FcShop } from "react-icons/fc";

import "./ProductLoading.scss";

const ProductLoading = ({ loading }) => {
  return (
    <div className="loading">
      <span className={`loading-brand ${loading ? "active" : ""}`}>
        <FcShop />
        <span>ReactJS eCommerce</span>
      </span>
    </div>
  );
};

export default ProductLoading;

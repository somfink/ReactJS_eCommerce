import { useContext, useEffect, useState } from "react";
import ScrollContext from "../../../store/ScrollContext/ScrollContext";

import ProductCard from "../ProductCard/ProductCard";
import ProductLoading from "../ProductLoading/ProductLoading";
import "./ProductList.scss";

const storageHandler = () => {
   if (sessionStorage.length <= 0) {
    return true;
   }
   return false;
};

const ProductList = ({ products }) => {
    const [productsAvalible, setProductsAvalible] = useState([]);
    const [isLoading, setIsLoading] = useState(storageHandler());

    const scrollCtx = useContext(ScrollContext);
    
  useEffect(() => {
    if (products.length > 0) {
        setProductsAvalible(products);
        const timestamp = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('isLoaded', 'true');
        }, 4000);
        return () => {
            clearTimeout(timestamp);
        }
    }
  }, [products]);

  return (
    <main className={`product-list ${scrollCtx.scrollPosition > 5 ? 'mt-s' : ''}`}>
      {isLoading && <ProductLoading loading={isLoading} />}
      {!isLoading && productsAvalible.map((product) => (
        <ProductCard
          key={product.id}
          description={product.description}
          image={product.image}
          price={product.price}
          title={product.title}
          id={product.id}
        />
      ))}

    </main>
  );
};

export default ProductList;

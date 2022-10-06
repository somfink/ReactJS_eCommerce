import { Route, Routes } from "react-router-dom";
import { useContext, useEffect, useReducer } from "react";

import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Product/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/Cart/CartModal/CartModal";
import {
  GetApiReducer,
  INITIAL_STATE,
} from "./reducers/GetApiReducer/GetApiReducer";
import { ACTION_TYPES } from "./reducers/GetApiReducer/GetActionTypes";

import "./App.scss";
import CartContext from "./store/CartContext/CartContext";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [apiState, dispatchApi] = useReducer(GetApiReducer, INITIAL_STATE);

  const cartCtx = useContext(CartContext);

  const fetchApiData = () => {
    const url = "https://fakestoreapi.com/products";
    dispatchApi({ type: ACTION_TYPES.FETCH_START });
    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        dispatchApi({ type: ACTION_TYPES.FETCH_SUCCESS, payload: json })
      )
      .catch((err) => {
        dispatchApi({ type: ACTION_TYPES.FETCH_ERROR });
        return console.error(err);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      <header className="header">
        <Navbar />
        {cartCtx.showCartModal && (
          <CartModal className={cartCtx.showCartModal ? "active" : ""} />
        )}
        <Routes>
          <Route path="/" element={<ProductList products={apiState.post} />} />
          <Route path="/product-details/:id" element={<ProductDetails productsDetails={apiState.post}/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </header>
      <Footer />
    </>
  );
}

export default App;

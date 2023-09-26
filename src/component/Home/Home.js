import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.scss";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProducts } from "../../actions/productActions";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const { loading, products, productCount, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    console.log("hello");
    dispatch(getProducts());
  }, [dispatch, error, alert]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Konukkupoo"} />
          <div className="banner">
            <p>Welcome to Konukkupoo</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll
                <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Home;

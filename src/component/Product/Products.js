import React, { useState } from "react";
import "./product.scss";
import { clearErrors, getProducts } from "../../actions/productActions";
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
const Products = () => {
  const { keyword } = useParams();
  const {
    products,
    error,
    productsCount,
    loading,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPageNo] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProducts(keyword, currentPage, price, category, ratings));
  }, [dispatch, currentPage, price, category, ratings,alert]);
  const priceHandler = (event, newprice) => {
    setPrice(newprice);
  };
  const count = filteredProductsCount;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS -- KONUKKUPOO"/>
          <h1 className="productsHeading">Products</h1>
          <div className="products">
            {products &&
              products.map((ele) => {
                return <ProductCard key={ele._id} product={ele} />;
              })}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count ? (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Products;

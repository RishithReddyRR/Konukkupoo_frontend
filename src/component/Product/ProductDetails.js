import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductsDetails } from "../../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "../Product/ReviewCard.js";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemToCart } from "../../actions/cartActions";
import { newReview } from "../../actions/productActions";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
function ProductDetails() {
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { success } = useSelector(
    (state) => state.newReview
  );
  const options = {
    edit: false,
    color: "rgba(20,20,20,.1)",
    activeColor: "tomato",
    value: product.rating,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const reviewSubmitHandler = () => {
   

    dispatch(newReview({productId:id,comment,rating}));

    setOpen(false);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: "NEW_REVIEW_RESET" });
    }
    dispatch(getProductsDetails(id));
  }, [dispatch, id, alert, error,success]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} --KONUKKUPOO`} />
          <div className="ProductDetails">
            <div>
              <Carousel
                showStatus={false}
                showThumbs={true}
                showArrows={true}
                infiniteLoop
                showIndicators
                autoPlay={true}
                interval={4000}
                transitionTime={2000}
                className="car"
              >
                {product.images &&
                  product.images.map((item, i) => (
                    <div className="citem">
                      <img
                        key={item.url}
                        src={item.url}
                        alt={`${i} slide`}
                        className="CarouselImage"
                      />
                    </div>
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numOfReviews} reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button
                      onClick={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <input type="number" value={quantity} readOnly />
                    <button
                      onClick={() => {
                        if (quantity < product.stock) {
                          setQuantity(quantity + 1);
                        } else {
                          alert.error(`there is only stock of ${quantity}`);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                  {""}
                  <button
                    disabled={product.stock < 1 || quantity == 0 ? true : false}
                    onClick={() => {
                      dispatch(addItemToCart(id, quantity));
                      alert.success("added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <p>
                  Status:{" "}
                  <b className={product.stock >= 1 ? "greenColor" : "redColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview" onClick={submitReviewToggle}>
                Submit Review
              </button>
            </div>
          </div>
          <div className="review">
            <h3 className="reviewsHeading">REVIEWS</h3>
            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />

                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews.map((review) => (
                  <ReviewCard review={review} />
                ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetails;

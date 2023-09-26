import { configureStore } from "@reduxjs/toolkit";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
} from "./reducers/product";
import { profileReducer, userReducer,allUserReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, myOrderReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";
const store = configureStore({
  reducer: {
    product: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrder: myOrderReducer,
    newReview: newReviewReducer,
    allOrders:allOrdersReducer,
    allUsers:allUserReducer,
    newProduct:newProductReducer,
    order:orderReducer,
    products:productReducer,
    orderDetails:orderDetailsReducer
  },
});
export default store;

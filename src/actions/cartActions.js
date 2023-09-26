import axios from "axios";
import {useSelector} from 'react-redux'
//add to cart

export const addItemToCart = (id, quantity) => async (dispatch,getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
 
    dispatch({ type: "ADD_TO_CART", payload: {
        product:id,
        name:data.product.name,
        price:data.product.price,
        image:data.product.images[0].url,
        stock:data.product.stock,
        quantity
    }}); 

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

};

//remove from cart

export const removeItemFromCart = (id) => async (dispatch,getState) => {

    dispatch({ type: "REMOVE_FROM_CART", payload:id}); 

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

};
//remove from cart

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({ type: "SAVE_SHIPPING_INFO", payload:data}); 

    localStorage.setItem("shippingInfo",JSON.stringify(data))

};


import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getOrderDetails,clearErrors } from '../../actions/orderAction'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {useAlert} from 'react-alert'
import Loader from "../layout/loader/Loader";
import MetaData from '../layout/MetaData'
import { Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import "./orderDetails.css";
const OrderDetails = () => {
  const dispatch=useDispatch()
  const {order,loading,error}=useSelector(state=>state.myOrder)
  const {id}=useParams()
  const alert=useAlert()
  const navigate=useNavigate()
  // console.log(order['user'])
  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors())
      navigate(-1)
    }
    dispatch(getOrderDetails(id))
  },[dispatch, alert, error,id])
  return (
    <>
    <MetaData title={`order--${id}`}/>
    {
      loading && order?<Loader />:( <div className="orderDetailsPage">
      <div className="orderDetailsContainer">
        <Typography component="h1">
          Order #{order && order._id}
        </Typography>
        <Typography>Shipping Info</Typography>
        <div className="orderDetailsContainerBox">
          <div>
            <p>Name:</p>
            <span>{order.user && order.user.name}</span>
          </div>
          <div>
            <p>Phone:</p>
            <span>
              {order.shippingInfo && order.shippingInfo.phoneNo}
            </span>
          </div>
          <div>
            <p>Address:</p>
            <span>
              {order.shippingInfo &&
                `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
            </span>
          </div>
        </div>
        <Typography>Payment</Typography>
        <div className="orderDetailsContainerBox">
          <div>
            <p
              className={
                order.paymentInfo &&
                order.paymentInfo.status === "succeeded"
                  ? "greenColor"
                  : "redColor"
              }
            >
              {order.paymentInfo &&
              order.paymentInfo.status === "succeeded"
                ? "PAID"
                : "NOT PAID"}
            </p>
          </div>

          <div>
            <p>Amount:</p>
            <span>{order.totalPrice && order.totalPrice}</span>
          </div>
        </div>

        <Typography>Order Status</Typography>
        <div className="orderDetailsContainerBox">
          <div>
            <p
              className={
                order.orderStatus && order.orderStatus === "Delivered"
                  ? "greenColor"
                  : "redColor"
              }
            >
              {order.orderStatus && order.orderStatus}
            </p>
          </div>
        </div>
      </div>

      <div className="orderDetailsCartItems">
        <Typography>Order Items:</Typography>
        <div className="orderDetailsCartItemsContainer">
          {order.orderItems &&
            order.orderItems.map((item) => (
              <div key={item.product}>
                <img src={item.image} alt="Product" />
                <Link to={`/product/${item.product}`}>
                  {item.name}
                </Link>{" "}
                <span>
                  {item.quantity} X ₹{item.price} ={" "}
                  <b>₹{item.price * item.quantity}</b>
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>)
    }
    </>
  )
}

export default OrderDetails
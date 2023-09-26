import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
export default function ProductCard({product}) {
    const options={
        edit:false,
        color:'rgba(20,20,20,.1)',
        activeColor:"tomato",
        value:product.rating,
        isHalf:true,
        size:window.innerWidth<600 ?20:25
    }
  return (
    <Link to={`/product/${product._id}`} className="productCard">
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <ReactStars {...options}/> <span>{product.numOfReviews} reviews</span>
        </div>
        <span>{`₹${product.price}`}</span>
    </Link>
  )
}
import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
export const Product = ({ product, addClickToCart }) => {
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h2>{name.slice(0, 25)}</h2>
                <h3>Price: {price}$</h3>
                <h4 className='seller'>seller: {seller}</h4>
                <h4>ratings: {ratings} star</h4>
            </div>
            <button className='btn' onClick={() => addClickToCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    )
}

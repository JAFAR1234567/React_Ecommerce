import React from 'react'
import './Cart.css'
export const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h1>order summery</h1>
            <h2>selected item : {cart.length}</h2>
        </div>
    )
}

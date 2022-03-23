import React from 'react'
import './Cart.css'
export const Cart = ({ cart }) => {
    console.log(cart);
    const price = cart.reduce((acc, curr) => acc = acc + curr.price, 0);
    const shipping = cart.reduce((acc, curr) => acc = acc + curr.shipping, 0);
    const tax = (price + shipping) * .1;
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h1>order summery</h1>
            <h3>selected items : {cart.length}</h3>
            <h3>Total Price : $ {price} </h3>
            <h3>Total Shipping : $ {shipping} </h3>
            <h3>Tax : $ {tax.toFixed(0)} </h3>
            <h3>Grand Total: $ {grandTotal}</h3>
        </div>
    )
}

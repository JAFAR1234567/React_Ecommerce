import React, { useEffect, useState } from 'react'
import { Cart } from './Cart/Cart';
import { Product } from './Product/Product';
import './Shop.css'

export const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addClickToCart = (product) => {
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addClickToCart={addClickToCart}
                    ></Product>)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}


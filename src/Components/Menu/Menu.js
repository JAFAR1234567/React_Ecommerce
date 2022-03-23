import React from 'react'
import './Menu.css'
import logo from '../../images/Logo.svg'

export const Menu = () => {
    return (
        <nav className='header'>
            <a href="/logo"><img src={logo} alt="" /></a>
            <div className='nav-link'>
                <a href="/shop">shop</a>
                <a href="/orders">orders</a>
                <a href="/inventory">inventory</a>
                <a href="/about">about</a>
            </div>
        </nav>
    )
}

import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems() {
    return (
        <div className="cartItems">
            <h1>Shopping Cart</h1>
            <hr/>
            <div className="cartItems__items">
            <CartItem />
            </div>
        </div>
    )
}

export default CartItems

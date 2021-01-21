import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems({items}) {
    console.log('here are the items', items)
    return (
        <div className="cartItems">
            <h1>Shopping Cart</h1>
            <hr/>
            <div className="cartItems__items">
             {items.map((item, index) => {
               return <CartItem item={item} key={index}  />
             })}

            </div>
        </div>
    )
}

export default CartItems

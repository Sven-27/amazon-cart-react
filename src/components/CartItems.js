import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems({items, setCartItems}) {
const changeItemQuantity = (e, index) => {
    // When we select a quantity on item, we pass it in here
    // pass in the index
    // using the index we need to change the quantity to the selected one from select option
    // update the items state
    console.log(e.target.value)
    console.log('this is the index', index)
    //do not update the state without setter function
    const newItems = [...items]
    newItems[index].quantity = e.target.value
    setCartItems(newItems)
}

const deleteItem = (index) => {
    
}


    console.log('here are the items', items)
    return (
        <div className="cartItems">
            <h1>Shopping Cart</h1>
            <hr/>
            <div className="cartItems__items">
             {items.map((item, index) => {
               return <CartItem index={index} item={item} key={index} changeItemQuantity={changeItemQuantity} />
             })}

            </div>
        </div>
    )
}

export default CartItems

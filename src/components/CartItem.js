import React from 'react'
import './CartItem.css'

function CartItem({index, item, changeItemQuantity}) {
    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img src={process.env.PUBLIC_URL + './items/' + item.image} alt="Some Image"/>
            </div>
            <div className="cartItem__info">
                <div className="cartItem__info__title">
                    <h2>{item.title}</h2>
                </div>
                <div className="cartItem__info__stock">{item.stock}</div>
                <div className="cartItem__item__actions">
                    <div className="cartItem__item__quantity">
                    <select onChange={(e)=>changeItemQuantity(e, index)} value={item.quantity} className="cartItem__select">
                    <option value="1">Qty: 1</option>
                    <option value="2">Qty: 2</option>
                    <option value="3">Qty: 3</option>
                    <option value="4">Qty: 4</option>
                    <option value="5">Qty: 5</option>
                    <option value="6">Qty: 6</option>
                    </select>    
                    </div> 
                    <div className="cartItem__divider">|</div>
                    <div className="cartItem__item__delete">Delete</div>
                </div>
            </div>
            <div className="cartItem__price">{item.price}</div>
        </div>
    )
}

export default CartItem

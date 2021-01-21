import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img src="https://cdn.alzashop.com/Foto/f3/NL/NL203a4n.jpg" alt="Some Image"/>
            </div>
            <div className="cartItem__info">
                <div className="cartItem__info__title">
                    <h2>Some Article</h2>
                </div>
                <div className="cartItem__info__stock">In Stock</div>
                <div className="cartItem__item__actions">
                    <div className="cartItem__item__quantity">
                    <select className="cartItem__select">
                    <option value="1">Qty: 1</option>
                    <option value="2">Qty: 2</option>
                    <option value="3">Qty: 3</option>
                    </select>    
                    </div> 
                    <div className="cartItem__divider">|</div>
                    <div className="cartItem__item__delete">Delete</div>
                </div>
            </div>
            <div className="cartItem__price">€500,-</div>
        </div>
    )
}

export default CartItem

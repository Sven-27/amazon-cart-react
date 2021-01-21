import React from 'react'
import './CartTotal.css'

function CartTotal() {
    return (
        <div className="cartTotal">
            <h3>Subtotal(5 items):
                <span className="cartTotal__price">
                    €2,843.45
                </span>
            </h3>
            <button className="cartTotal__button">
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal

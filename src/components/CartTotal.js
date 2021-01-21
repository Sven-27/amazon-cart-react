import React from 'react'
import './CartTotal.css'

function CartTotal({items}) {

    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += (item.price * item.quantity)
        });
        return total;
    }

    return (
        <div className="cartTotal">
            <h3>Subtotal({items.length} items):
                <span className="cartTotal__price">
                    €{getTotalPrice().toFixed(2)}
                </span>
            </h3>
            <button className="cartTotal__button">
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal

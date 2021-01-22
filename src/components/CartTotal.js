import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal({items}) {

    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += (item.price * item.quantity)
        });
        return total;
    }

    const getItemTotal = () => {
   
    }

    return (
        <div className="cartTotal">
            <h3>Subtotal({getItemTotal()} items):
                <span className="cartTotal__price">
                    <NumberFormat value={getTotalPrice()} displayType="text" thousandSeparator={true} prefix={'€'} decimalScale={2} />
                </span>
            </h3>
            <button className="cartTotal__button">
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal

import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import CartItems from './components/CartItems'
import CartTotal from './components/CartTotal'
import data from './Data'

function App() {
const [cartItems, setCartItems] = useState(data)
console.log(cartItems)
  return (
    <div className="app">
        <div className="app__header">
             <Header title="Amazon Cart"/>
        </div>
        <div className="app__main">
              <CartItems items={cartItems} setCartItems={setCartItems} />
              <CartTotal items={cartItems}/>
        </div>
    </div>
  );
}

export default App;

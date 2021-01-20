import React from 'react'
import './App.css';
import Header from './components/Header'
import CartItems from './components/CartItems'
import CartTotal from './components/CartTotal'

function App() {


  return (
    <div className="app">
        <div className="app__header">
             <Header title="Amazon Cart"/>
        </div>
        <div className="app__main">
              <CartItems />
              <CartTotal />
        </div>
    </div>
  );
}

export default App;

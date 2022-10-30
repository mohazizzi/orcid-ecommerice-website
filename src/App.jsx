import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import SingleProduct from './pages/single-product/SingleProduct';
import Data from './data.js'; 
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';

const productItems = Data.productItems

let englishNumberToFarsi = (number)=> parseInt(number).toLocaleString('ar-EG')


function App() {
  
  
  const [cartItem, setCartItem] = useState([])
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Navbar cartItem={cartItem} englishNumberToFarsi={englishNumberToFarsi}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct englishNumberToFarsi={englishNumberToFarsi} productItems={productItems} addToCart={addToCart}/>} />
      </Routes>      
      <Footer/>
    </>
  );
}

export default App;
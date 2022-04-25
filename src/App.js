import './App.css';

import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import NavbarSuositus from './components/NavbarSuositus';
import BootstrapCard from './components/Bootstrap_Card';
import BootstrapCarousel from './components/Bootstrap_Carousel';
import Home from './pages/Home';
import Products from './pages/Products';
import Feedback from './pages/Feedback';
import NavbarFixedTOP from './components/NavbarFixedTOP';
import { useState } from 'react';
import Ostoskori from './pages/Ostoskori';


const URL = 'http://localhost/verkkokauppabackend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect (() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    }
    else {
      product['amount'] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWihtoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWihtoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWihtoutRemoved));
  }
  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }
  return (
    <>
 
    <NavbarFixedTOP url={URL} cart={cart}/>


    <div className='container'>

    <Header /> 

    
    <Navbar url={URL}/>
 
   
    

    <Routes>
      <Route path="/Home/" element={<Home />}/>
      <Route path="/product/:productId" element={<Products url={URL} addToCart={addToCart}/>} />
      <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart}/>} />
      <Route path="/Ostoskori" element={<Ostoskori cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} />} />
      <Route path="/search/:searchPhrase" element={<Products url={URL}/>} />
      <Route path="/Feedback/" element={<Feedback />} />
    </Routes>

    </div>

    <Footer />

    </>
  
  
  );


}



export default App;
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


const URL = 'http://localhost/verkkokauppabackend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect (() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
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
      <Route path="/search/:searchPhrase" element={<Products url={URL}/>} />
      <Route path="/Feedback/" element={<Feedback />} />
    </Routes>

    </div>

    <Footer />

    </>
  
  
  );


}



export default App;
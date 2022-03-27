import './App.css';
import React from 'react';
import logo from './images/logoboisJOMS.png';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products'

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <div className="App">
      <div>
        <img src={logo}></img>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
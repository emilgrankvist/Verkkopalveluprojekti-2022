import './App.css';

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


const URL = 'http://localhost/verkkokauppabackend/';

function App() {
  return (
    <>
 
    <NavbarFixedTOP />


    <div className='container'>

    <Header /> 

    <Navbar url={URL}/>
 
    <BootstrapCarousel />

    <NavbarSuositus />
    
    <BootstrapCard />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Products url={URL}/>} />
      <Route path="/products/:categoryId" element={<Products url={URL}/>} />
      <Route path="/search/:searchPhrase" element={<Products url={URL}/>} />
      <Route path="/Feedback/" element={<Feedback />} />
    </Routes>

    </div>

    <Footer />

    </>
  
  
  );


}



export default App;
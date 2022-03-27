import './App.css';

import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Logo from './images/logoboisJOMS.png'; 

function App() {
  return (
    <>
    <Header />
    <Navbar />
  <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
    </div>
    <Footer />

    </>
  );
}

export default App;
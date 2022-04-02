import './App.css';

import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Logo from './images/logoboisJOMS.png'; 
import Computers from './pages/Computers';
import Pheripals from './pages/Pheripals';
import Feedback from './pages/Feedback';

const URL = 'http://localhost/verkkokauppabackend/';

function App() {
  return (
    <>
    <Header />
    <Navbar url={URL}/>
  <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products/:categoryId" element={<Products url={URL}/>} />
      <Route path="/Computers" element={<Computers />} />
      <Route path="/Pheripals" element={<Pheripals />} />
      <Route path="/Feedback" element={<Feedback />} />
    </Routes>
    </div>
    <Footer />

    </>
  );
}

export default App;
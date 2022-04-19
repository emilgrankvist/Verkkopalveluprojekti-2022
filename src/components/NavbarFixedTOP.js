import axios from 'axios';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from '../components/Cart';


export default function NavbarFixedTOP({url,cart}) {

const [search, setSearch] = useState('');

const navigate = useNavigate();

const [categories,setCategories] = useState ([]);


function executeSearch(e) {
  if (e.charCode === 13) {
    e.preventDefault();
    navigate('/search/' + search);
  }
}



    return (
<div className='fixed-top FIXEDnavbarTOP ms-auto ' >
<Navbar className='fixed-top '/>
<Container >
  <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand href="/Home"><FontAwesomeIcon icon={faHome} />
      <Cart cart={cart}><FontAwesomeIcon icon={faCartShopping}/> </Cart>
      </Navbar.Brand>
    

    <form className="d-flex navbarHAKU navbarPadding HakuOikealle">
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => executeSearch(e)}
        className="form-control me-2 " 
        type="search" 
        placeholder="Search" 
        aria-label="Search">

        </input>
        <button className="btn btn-outline-primary" type="submit">Etsi</button>
      </form>
  </Navbar>
</Container>
</div>
    )
}
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function NavbarFixedTOP({url,cart}) {

const [search, setSearch] = useState('');

const navigate = useNavigate();

function executeSearch(e) {
  if (e.charCode === 13) {
    e.preventDefault();
    navigate('/search/' + search);
  }
}

    return (
<div className='fixed-top FIXEDnavbarTOP ms-auto ' >
<Navbar className='fixed-top '/>
<Container className="col">
  <Navbar className='FIXEDnavbarTOP' expand="lg" variant="light" bg="light">
      <Navbar.Brand href="/Home"><FontAwesomeIcon icon={faHome} />  </Navbar.Brand>
      
      <Navbar.Brand cart={cart} href="/Ostoskori"> 
      <FontAwesomeIcon icon={faCartShopping}/>  
      </Navbar.Brand>
      <Cart cart={cart}></Cart>

    <form className="d-flex navbarHAKU  ms-auto navBarhakuPAD">
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => executeSearch(e)}
        className="form-control me-2 " 
        type="search" 
        placeholder="Hae tuotteita" 
        aria-label="Search" />

        
        <button className="btn btn-outline-primary" type="search" >Etsi</button>
      </form>
  </Navbar>
      
</Container>
</div>
    )
}
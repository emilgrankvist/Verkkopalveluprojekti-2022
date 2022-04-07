import axios from 'axios';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function NavbarFixedTOP() {
    return (
<div className='fixed-top FIXEDnavbarTOP ms-auto ' >
<Navbar className='fixed-top '/>
<Container >
  <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#"><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
      <Navbar.Brand className='marginOikealle' href="#"><FontAwesomeIcon icon={faCartShopping} /></Navbar.Brand>
    <form>
      
    </form>
    <form className="d-flex navbarHAKU paddingLisäys HakuOikealle">
        <input className="form-control me-2 " type="search" placeholder="Hakusana" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Etsi</button>
      </form>
  </Navbar>
</Container>
</div>
    )
}
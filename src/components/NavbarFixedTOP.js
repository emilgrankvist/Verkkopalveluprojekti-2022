import axios from 'axios';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function NavbarFixedTOP({url,cart}) {

const [categories,setCategories] = useState([]);
const [search, setSearch] = useState('');

const navigate = useNavigate();

useEffect(() => {
  axios.get(url + 'products/getcategories.php')
    .then((response) => {
      const json = response.data;
      setCategories(json);
    }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
    })
}, [])


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
      <Navbar.Brand href="#"><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
      <Navbar.Brand href="#"><FontAwesomeIcon icon={faCartShopping} />         0,00€</Navbar.Brand>
    

    <form className="d-flex navbarHAKU navbarPadding HakuOikealle">
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => executeSearch(e)}
        className="form-control me-2 " 
        type="search" 
        placeholder="Hakusana" 
        aria-label="Search">

        </input>
        <button className="btn btn-outline-primary" type="submit">Etsi</button>
      </form>
  </Navbar>
</Container>
</div>
    )
}
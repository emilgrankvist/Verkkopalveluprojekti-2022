import axios from 'axios';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


export default function NavbarSuositus() {
  return (
<div >
<Navbar className='fixed-top '/>

<Navbar expand="lg" variant="light" bg="light">
    <h3><FontAwesomeIcon className='paddingTilaa' icon={faGamepad}></FontAwesomeIcon> Jomm's Suosittelee</h3>
</Navbar>

</div>
  )
}
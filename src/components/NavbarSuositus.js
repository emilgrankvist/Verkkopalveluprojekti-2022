import { Navbar } from "react-bootstrap";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

export default function NavbarSuositus() {
  return (
<div >
<Navbar className='fixed-top '/>

<Navbar expand="lg" variant="light" bg="light">
    <h4><FontAwesomeIcon className='paddingTilaa' icon={faGamepad}></FontAwesomeIcon> Jomm's Suosittelee</h4>
</Navbar>

</div>
  )
}
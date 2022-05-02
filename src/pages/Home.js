import React from 'react'
import NavbarSuositus from '../components/NavbarSuositus';
import BootstrapCarousel from '../components/Bootstrap_Carousel';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

    return (
        <div>
             <BootstrapCarousel />

            <NavbarSuositus />


        </div>

      
      
      )
    
      
    }
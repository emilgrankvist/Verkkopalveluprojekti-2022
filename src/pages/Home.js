import React from 'react'
import NavbarSuositus from '../components/NavbarSuositus';
import BootstrapCard from '../components/Bootstrap_Card';
import BootstrapCarousel from '../components/Bootstrap_Carousel';


export default function Home() {
    return (
        <div>
             <BootstrapCarousel />
        <NavbarSuositus />
        <BootstrapCard />
        </div>
    )
}
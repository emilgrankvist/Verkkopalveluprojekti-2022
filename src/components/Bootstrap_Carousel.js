import React from "react";
import { Carousel } from "react-bootstrap";
import Mainos1 from "../images/mainostesti1.jpg";
import Mainos2 from "../images/mainostesti2.jpg";
import Mainos3 from "../images/mainostesti3.jpg";



export default function Bootstrap_Carousel() {
    return (

<div>
<Carousel className="marginLisäys center row-cols-1 mainosKokoa">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mainos1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Tähän mainos 1</h3>
      <p>Jotain pelaamisesta idk</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mainos2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Tähän mainos 2</h3>
      <p>Tietokone korjaus mainos esim.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mainos3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tähän mainos 3</h3>
      <p>Alennuksia?</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


) 


    }

  
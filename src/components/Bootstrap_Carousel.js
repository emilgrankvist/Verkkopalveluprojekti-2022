import React from "react";
import { Carousel } from "react-bootstrap";
import Mainos1 from "../images/mainos1.png";
import Mainos2 from "../images/mainos2.png";
import Mainos3 from "../images/mainos3.png";

export default function Bootstrap_Carousel() {
    return (

<div>
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mainos1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mainos2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mainos3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
) 
} 
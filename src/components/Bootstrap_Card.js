import React from 'react';
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Tuote1 from "../images/nes-nintendo.jpg";
import Tuote2 from "../images/xbox-one.jpg";
import Tuote3 from "../images/xbox-original.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Bootstrap_Card = () => {

    const cardInfo = [
        {   image: Tuote1, title: "Nes", text:"Nintendo", price:"19.99€"    },
        {   image: Tuote2, title: "One", text:"Xbox", price:"150€"   },
        {   image: Tuote3, title: "Original", text:"Xbox", price:"50€"    },

    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="Kortti paddingLisäys marginLisäys center">
            <Card.Img variant="top"  src={card.image} />
            <Card.Body className='cen'>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>

            <div >
              <Button variant="primary">    <FontAwesomeIcon icon={faCartShopping} />   </Button>
              <Card.Text className='riviin'>
                  {card.price}
              </Card.Text>
              </div>        

            </Card.Body>
          </Card>
        )
    }

    return (
        <div className='row center'>
            {cardInfo.map(renderCard)}
        </div>
    )

    

    };

    export default Bootstrap_Card;
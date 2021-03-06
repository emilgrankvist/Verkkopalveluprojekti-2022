import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Tuote1 from "../images/nes-nintendo.jpg";
import Tuote2 from "../images/xbox-one.jpg";
import Tuote3 from "../images/xbox-original.jpg";
import Tuote4 from "../images/playstation-ps4.jpg";
import Tuote5 from "../images/playstation-ps1.jpg";
import Tuote6 from "../images/sega-genesis.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Bootstrap_Card = () => {

    const cardInfo = [
        {   image: Tuote1, title: "Nes", text:"Nintendo", price:"19.99€"    },
        {   image: Tuote2, title: "One", text:"Xbox", price:"150€"   },
        {   image: Tuote3, title: "Original", text:"Xbox", price:"50€"    },
        {   image: Tuote4, title: "PS4", text:"PlayStation", price:"200€"    },
        {   image: Tuote5, title: "PS1", text:"PlayStation", price:"150€"    },
        {   image: Tuote6, title: "Genesis", text:"Sega", price:"100€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },
        {   image: Tuote1, title: "Placeholder", text:"ayo", price:"99,99€"    },

    ];

    const renderCard = (card, index) => {
        return (
          
            <Card style={{ width: '14rem' }} key={index} className="Kortti paddingLisäys korttiMarginLisäys center">

            <Card.Body>
            <Card.Link className='eiViiva' href="#">
            <Card.Img variant="top" src={card.image}/>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
          
              </Card.Link>
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
      <Container>
        <div className='row center korttitaustaVäri'>
            {cardInfo.map(renderCard)}
        </div>
        </Container>
    )

    

    };

    export default Bootstrap_Card;
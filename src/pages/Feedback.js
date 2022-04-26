import { faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Feedback() {

  const [firstName, setFirstName] = useState({})
  const [lastName, setLastName] = useState({})
  const [phone, setPhone] = useState({})
  const [email, setEmail] = useState({})
  const [message, setMessage] = useState({})

const handleSubmit = (e) => {
  e.preventDefault();
  const json = JSON.stringify({firstName: firstName, lastName: lastName, phone: phone, email: email, message: message});
  
  axios.post('http://localhost/verkkokauppabackend/feedback/feedback.php', json, {
    headers: {
      'Content-Type' : 'application/json'
    }
    
  })
}

    return (
        <div className="container">
    <h1>Anna palautetta ja/tai ota meihin yhteyttä</h1>
    <form onSubmit={handleSubmit}>
    <label for="Etunimi">Etunimi: </label>
    <input type="text" name="firstName" id='firstName' required onChange={(e) => setFirstName(e.target.value)}></input><br></br>

    <label for="Sukunimi">Sukunimi: </label>
    <input type="text" name="lastName" id='lastName' required onChange={(e) => setLastName(e.target.value)}></input><br></br>

    <label for="puhelin">Puhelin: </label>
    <input type="number" name="phone" id='phone' required onChange={(e) => setPhone(e.target.value)}></input><br></br>

    <label for="sähköposti">Sähköposti: </label>
    <input type="email" name="email" id='email' required onChange={(e) => setEmail(e.target.value)}></input><br></br>

    <label for="viesti">Viesti: </label>
    <input type="text" name="message" id="message" required onChange={(e) => setMessage(e.target.value)}></input><br></br>

    <input type="submit" value="Lähetä"></input>
  </form>

 </div>
    )
    }

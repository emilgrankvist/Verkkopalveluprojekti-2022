import React from 'react'
import { useState } from 'react';
import axios, { Axios } from 'axios';

export default function Feedback() {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/verkkokauppabackend/feedback.php', inputs)

        console.log(inputs)
    }
    return (
        
            <div className="container">
    <h1>Anna palautetta ja/tai ota meihin yhteyttä</h1>
  <form onSubmit={handleSubmit}>
    <label for="Etunimi">Etunimi: </label>
    <input type="text" name="firstName" id='firstName' required onChange={handleChange}></input><br></br>

    <label for="Sukunimi">Sukunimi: </label>
    <input type="text" name="lastName" id='lastName' required onChange={handleChange}></input><br></br>

    <label for="puhelin">Puhelin: </label>
    <input type="number" name="phone" id='phone' required onChange={handleChange}></input><br></br>

    <label for="sähköposti">Sähköposti: </label>
    <input type="email" name="email" id='email' required onChange={handleChange}></input><br></br>

    <label for="viesti">Viesti: </label>
    <input type="text" name="message" id="message" required onChange={handleChange}></input><br></br>

    <input type="submit" value="Lähetä"></input>
  </form>
</div>
    );      
}
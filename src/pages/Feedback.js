import React from 'react'

export default function Feedback() {
    return (
        <div className="container">
    <h1>Anna palautetta ja/tai ota meihin yhteyttä</h1>
  <form action="http://localhost/verkkokauppabackend/feedback.php" method='POST'>
    <label for="Etunimi">Etunimi: </label>
    <input type="text" name="firstName" id='firstName' required></input><br></br>

    <label for="Sukunimi">Sukunimi: </label>
    <input type="text" name="lastName" id='lastName' required></input><br></br>

    <label for="puhelin">Puhelin: </label>
    <input type="number" name="phone" id='phone' required></input><br></br>

    <label for="sähköposti">Sähköposti: </label>
    <input type="email" name="email" id='email' required></input><br></br>

    <label for="viesti">Viesti: </label>
    <input type="text" name="message" id="message" required></input><br></br>

    <input type="submit" value="Lähetä"></input>
  </form>

 </div>
    )
}
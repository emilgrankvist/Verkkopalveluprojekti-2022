import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link className='navbar-link' to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link" to="/products">Komponentit</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link" to="/">Oheislaitteet</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link" to="/">Tietokoneet</Link>
      </li>
      
    </ul>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Syötä hakusana" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Etsi</button>
      </form>
  </div>
</nav>
    )
}
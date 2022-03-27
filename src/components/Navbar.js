import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({url}) {
  const [categories, setCategories] = useState([]);


     useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
          const json = response.data;
          setCategories(json);
          console.log(json);
        }).catch (error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
      }, [])


      return (
      
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className='nav-item dropdown'>
        <a className='nav-link dropdown-toggle' href='#' id="dropdown1"
        data-bs-toggle="dropdown" aria-expanded="false">Tuotteemme</a>
        <ul className='dropdown-menu' aria-labelledby='downdown01'>
          {categories.map(category => (
            <li key={category.id}>
              {<Link
              className='dropdown-item'
            to={'/products/' + category.id}>{category.name}
            </Link>}
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item active">
       <Link className='navbar-link' to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link" to="/products">Komponentit</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link" to="/Pheripals">Oheislaitteet</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-link" to="/Computers">Tietokoneet</Link> 
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
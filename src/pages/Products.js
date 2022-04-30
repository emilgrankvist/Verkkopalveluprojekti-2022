import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BootstrapCard from '../components/Bootstrap_Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Products({ url,addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {

    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
        setCategoryName(json.category);
        setProducts(json.products);
        } else {
          setCategoryName(params.searchPhrase);
          setProducts(json);
        }
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    })
  }, [params])
  return (
    <div>
      <h3>Category {categoryName}</h3>

      
      {products.map(product => (

        
        <div key={product.id}>
          {product.name}
          <br></br>
          {product.price} €
          <div><img src={url + 'img/' +product.image} alt="Kuva tuotteelle"></img></div>
          <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Add to cart</button>
        </div>

        
      ))}
    </div>
  
  
  )

  
}

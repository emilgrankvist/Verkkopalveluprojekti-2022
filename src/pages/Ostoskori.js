import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useEffect } from 'react';
import axios from 'axios';



export default function Ostoskori({cart, removeFromCart, updateAmount, empty}) {
    const [inputs,_] = useState([]);
    const [inputIndex,setInputIndex] = useState(-1);
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [address,setAddress] = useState('');
    const [zip,setZip] = useState('');
    const [city,setCity] = useState('');
    const [product,setProduct] = useState ('');
    const [finished,setFinished] = useState (false);

    const URL = 'http://localhost/verkkokauppabackend/';

    let sum = 0

    useEffect(() => {
      for (let i = 0;i<cart.length;i++) {
          inputs[i] = React.createRef();
      }
    }, [cart.length,inputs])
    
    function changeAmount(e,product,index) {
        updateAmount(e.target.value,product);
        setInputIndex(index);
    }
    
    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    },[cart])
      
     
    function order(e) {
        e.preventDefault();
        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            zip: zip,
            city: city,
            product: product.amount,
            cart: cart,
            
            });
        axios.post(URL + 'order/order.php',json,{
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            empty();
            setFinished(true);
        }).catch(error => {
            alert(error.response === undefined ? error: error.response.data.error);
        });
    }
    if (finished === false ) {
    return (
        <div>
            <h3 className="header">Ostoskorisi</h3>
            <table className="table">
                <tbody>
                    {cart.map((product, index) => {
                        sum+=parseFloat(product.price) * parseInt(product.amount);
                        return (
                            <tr key={uuid()}>
                                <td>{product.name}</td>
                                <td>{product.price} €</td>
                                <td>
                                    <input ref={inputs[index]} type="number" min="1" style={{width: '70px'}} className="OstoskoriNappi" value={product.amount} onChange={e => changeAmount(e,product,index)} />
                                </td>
                                <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                            </tr>
                        )
                        })}
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)} €</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            {cart.length > 0 &&
            <>
            <h2>Asiakastiedot</h2>
            <form onSubmit={order}>
                <div className='form-group'>
                    <label>Etunimi:</label>
                    <input className="form-control" onChange={e => setFirstname(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Sukunimi:</label>
                    <input className="form-control" onChange={e => setLastname(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Osoite:</label>
                    <input className="form-control" onChange={e => setAddress(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Postinumero:</label>
                    <input className="form-control" onChange={e => setZip(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Postitoimipaikka:</label>
                    <input className="form-control" onChange={e => setCity(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary">Vahvista tilaus</button>
            </form>
            </>
            }
        </div>
    )
        } else {
            return (<h3>Kiitos tilauksestasi!</h3>)
        }
}

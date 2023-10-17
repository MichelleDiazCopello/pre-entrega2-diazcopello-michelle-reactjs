import './item-detail-container.css';
import { useState, useEffect } from 'react';
import { getProductByID } from '../../asyncProducts';
import ItemDetails from '../item-detail/item-detail';

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState (null);

    useEffect ( () => {
        getProductByID ('1')
        .then ( (response) => {
            setProduct (response)
        })
        .catch ( (err) => {
            console.error (err)
        });
    }, [] )

    return (
        <div className= 'ItemDetailsContainer'>
            <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailContainer
import './item-detail-container.css';
import { useState, useEffect } from 'react';
import { getProductByID } from '../../asyncProducts';
import ItemDetails from '../item-detail/item-detail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState (null);

    const { itemID } = useParams ()

    useEffect ( () => {
        getProductByID ( itemID )
        .then ( (response) => {
            setProduct (response)
        })
        .catch ( (err) => {
            console.error (err)
        });
    }, [ itemID ] )

    return (
        <div className= 'ItemDetailsContainer'>
            <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailContainer
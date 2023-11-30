import './item-detail-container.css';
import { useState, useEffect } from 'react';
import ItemDetails from '../item-detail/item-detail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { database } from '../../services/firebase/firebaseConfig';


const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState (null);
    const [ loading, setLoading ] = useState ( true );

    const { itemID } = useParams ()

    useEffect ( () => {
        setLoading ( true );

        const docRef = doc ( database, 'products', itemID );

        getDoc ( docRef )
            .then ( response => {
                const data = response.data ();
                const dbProducts = { id: response.id, ...data };
                setProduct ( dbProducts );
            })
            .catch ( err => {
                console.log ( err );
            })
            .finally ( () => {
                setLoading ( false );
            });

    }, [ itemID ] );

    if ( loading ) {
        return <h1>Aguarde, su su producto se está cargando</h1>
    };

    return (
        <div className= 'ItemDetailsContainer'>
            <ItemDetails {...product}/>
        </div>
    );
};

export default ItemDetailContainer;
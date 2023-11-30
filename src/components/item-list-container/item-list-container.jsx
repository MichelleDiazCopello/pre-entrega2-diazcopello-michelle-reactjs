import './item-list-container.css'
import { useEffect, useState } from "react";
import ItemList from '../item-list/item-list';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { database } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ( { greeting } ) => {
    const [ products, setProducts ] = useState ([]);
    const [ loading, setLoading ] = useState ( true );

    const { categoryID } = useParams ();
    
    useEffect ( () => {
        setLoading ( true );

        const collectionRef = categoryID
        ? query ( collection ( database, 'products'), where ( 'category', '==', categoryID ))
        : collection ( database, 'products' );

        getDocs ( collectionRef )
            .then ( response => {
                const dbProducts = response.docs.map ( doc => {
                    const data = doc.data ();
                    return { id: doc.id, ...data };
                });
                setProducts ( dbProducts );
            })
            .catch ( err => {
                console.log ( err );
            })
            .finally ( () => {
                setLoading ( false );
            })
        
    }, [categoryID] );

    if ( loading ) {
        return <h1>Aguarde, su producto se está cargando</h1>
    };

    return (
        <div className= "ProductsCard">
            <h1 className= 'CardTitle'>{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    );
};

export default ItemListContainer;
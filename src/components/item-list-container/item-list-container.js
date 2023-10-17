import './item-list-container.css'
import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from '../../asyncProducts';
import ItemList from '../item-list/item-list';
import { useParams } from "react-router-dom";

const ItemListContainer = ( { greeting } ) => {
    const [products, setProducts] = useState ([])

    const { categoryID } = useParams ()
    
    useEffect ( () => {
        const asyncFunction = categoryID ? getProductByCategory : getProducts

        asyncFunction ( categoryID )
        .then ( response => {
            setProducts (response)
        })
        .catch ( err => {
            console.error (err)
        })
    }, [categoryID] )

    return (
        <div className= "ProductsCard">
            <h1 className= 'CardTitle'>{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer
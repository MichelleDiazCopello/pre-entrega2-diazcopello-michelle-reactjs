import './item-detail.css';
import { useContext, useState } from 'react';
import ItemCount from '../item-count/item-count';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetails = ( {id, name, price, category, description, img, stock} ) => {
    const [ quantityAdded, setquantityAdded ] = useState ( 0 );

    const { addItem } = useContext ( CartContext );

    const handleOnAdd = ( quantity ) => {
        setquantityAdded ( quantity );

        const item = {
            id, name, price
        };

        addItem ( item, quantity );

    };
    
    return (
        <article className= 'CardItem'>
            <header className= 'Header'>
                <h2 className= 'ItemHeader'> {name} </h2>
            </header>
            <picture>
                <img src= {img} alt= {name} className= 'ItemImg'/>
            </picture>
            <section>
                <p className= 'productInformation'> Categoría: {category} </p>
                <p className= 'productInformation'> Descripción: {description} </p>
                <p className= 'productInformation'> Precio: ${price} </p>
            </section>
            <footer className= 'ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to={ './cart' } className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                };
            </footer>
        </article>
    );
};

export default ItemDetails;
import './item.css';
import { Link } from 'react-router-dom';

const Item = ( {id, name, price, img, stock } ) => {
    return (
        <article className= 'CardItem'>
            <header className= 'Header'>
                <h2 className= 'ItemHeader'> {name} </h2>
            </header>
            <picture>
                <img src= {img} alt= {name} className= 'ItemImg'/>
            </picture>
            <section className='InfoSection'>
                <p className= 'ProductInformation'> Precio: ${price} </p>
                <p className= 'ProductInformation'> Stock Discponible: {stock} </p>
            </section>
            <footer className= 'ItemFooter'>
                <Link to= {`/item/${id}`} className= 'Option'>Ver Detalles</Link>
            </footer>
        </article>
    )
}

export default Item
import { Link } from 'react-router-dom'
import './item.css'

const Item = ( {id, name, price, img, stock } ) => {
    return (
        <article className= 'CardItem'>
            <header className= 'Header'>
                <h2 className= 'ItemHeader'> {name} </h2>
            </header>
            <picture>
                <img src= {img} alt= {name} className= 'ItemImg'/>
            </picture>
            <section>
                <p className= 'productInformation'> Precio: ${price} </p>
                <p className= 'productInformation'> Stock Discponible: {stock} </p>
            </section>
            <footer className= 'ItemFooter'>
                <Link to= {`/item/${id}`} className= 'Option'>Ver Detalles</Link>
            </footer>
        </article>
    )
}

export default Item
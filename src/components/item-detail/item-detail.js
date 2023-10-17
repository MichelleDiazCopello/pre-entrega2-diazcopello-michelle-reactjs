import './item-detail.css';
import ItemCount from '../item-count/item-count';

const ItemDetails = ( {id, name, price, category, description, img, stock} ) => {
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
                <ItemCount initial= {1} stock= {stock} onAdd= { (quantity) => console.log ( `Cantidad Agregada`, quantity )}/>
            </footer>
        </article>
    )
}

export default ItemDetails
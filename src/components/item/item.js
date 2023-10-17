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
                <button className= 'Details'>Ver Detalles</button>
            </footer>
        </article>
    )
}

export default Item
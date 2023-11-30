import './cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../cartItem/cartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext ( CartContext );

    if ( totalQuantity === 0 ) {
        return (
            <div>
                <h1>No existen productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        );
    };

    return (
        <div>
            { cart.map ( p => <CartItem key= { p.id } { ...p }/>)};
            <h3>Total: $ {total}</h3>;
            <button onClick={ () => clearCart () } className='Button'>Vaciar carrito</button>;
            <Link to='/checkout' className='Option'></Link>
        </div>
    );
};

export default Cart;

// ver / crear el archivo cartItem. 
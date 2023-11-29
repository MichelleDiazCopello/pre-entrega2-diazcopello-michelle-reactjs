import './cart-widget.css';
import cart from './assets/cart-shopping-solid.svg';

const CartWidget = () => {
    return (
        <div className= 'Cart-Widget'>
            <img src= {cart} alt="cart-widget" width="15px" />
            <p className= 'NumberExample'>3</p>
        </div>
    )
}

export default CartWidget
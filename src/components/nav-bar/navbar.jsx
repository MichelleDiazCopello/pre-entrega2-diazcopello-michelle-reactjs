import './navbar.css';
import CartWidget from "../cart-widget/cart-widget";
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className= 'NavBar'>
            <Link to= '/' className= 'Title'>
                <h1>Tienda Natural</h1>
            </Link>
            <div className= 'Categories'>
                <NavLink to= {`/category/frutosSecos`} className= { ( { isActive } ) => isActive ? 'ActiveOption' : 'Option' }>Frutos Secos</NavLink>
                <NavLink to= {`/category/harinas`} className= { ( { isActive } ) => isActive ? 'ActiveOption' : 'Option' }>Harinas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
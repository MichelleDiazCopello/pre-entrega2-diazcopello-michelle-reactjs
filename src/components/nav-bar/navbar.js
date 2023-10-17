import CartWidget from "../cart-widget/cart-widget"

const NavBar = () => {
    return (
        <nav>
            <h2>Ecommerce</h2>
            <div>
                <button>Categoría 1</button>
                <button>Categoría 2</button>
                <button>Categoría 3</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
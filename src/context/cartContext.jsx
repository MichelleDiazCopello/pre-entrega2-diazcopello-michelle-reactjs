import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
});

export const CartProvider = ( { children } ) => {
    const [ cart, setCart ] = useState ( [] );
    console.log ( cart );

    const addItem = ( item, quantity ) => {
        if ( !isInCart ( item.id ) ) {
            setCart ( prev => [ ...prev, { ...item, quantity }]);
        }
        else {
            console.error ( 'El producto ya se encuentra en el carrito' );
        };
    };

    const removeItem = ( itemId ) => {
        const cardUpdated = cart.filter ( product => product.id !== itemId );
        setCart ( cardUpdated );
    };

    const clearCart = () => {
        setCart ( [] );
    };

    const isInCart = ( itemId ) => {
        return cart.some ( product => product.id === itemId );
    };

    return (
        <CartContext.Provider value={ { cart, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    );
};


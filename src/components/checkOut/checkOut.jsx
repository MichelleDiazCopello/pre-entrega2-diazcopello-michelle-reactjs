import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import CheckOutForm from '../checkOutForm/checkOutForm';
import { database } from '../../services/firebase/firebaseConfig';


const CheckOut = () => {
    const [ loading, setLoading ] = useState ( false );
    const [ orderId, setOrderId ] = useState ( '' );

    const { cart, total, clearCart } = useContext ( CartContext );

    const createOrder = async ( { name, phone, email }) => {
        setLoading ( true );

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate ( new Date ())
            };

            const batch = writeBatch ( database );

            const outOfStock = [];

            const ids = cart.map ( prod => prod.id );

            const productsRef = collection ( database, 'products' );

            const prodFromFirestore = await getDocs ( query ( productsRef, where ( documentId (), 'in',ids )));

            const { docs } = prodFromFirestore;
            
            docs.forEach ( doc => {
                const dataDoc = doc.data ();
                const dbStock = dataDoc.stock 

                const productsToCart = cart.find ( prod => prod.id === doc.id );
                const productsQuantity = productsToCart?.quantity;

                if ( dbStock >= productsQuantity ) {
                    batch.update ( doc.ref, { stock: dbStock - productsQuantity });
                }
                else {
                    outOfStock.push ({ id: doc.id, ...dataDoc });
                };
            });

            if ( outOfStock.length === 0 ) {
                await batch.commit ();

                const orderRef = collection ( database, 'orders' );

                const orderAdded = await addDoc ( orderRef, objOrder );

                setOrderId ( orderAdded.id );
                clearCart ();
            }
            else {
                console.error ( 'Productos sin stock' );
            };

        } catch (error) {
            console.log ( error );
        }
        finally {
            setLoading ( false );
        };
    };

    if ( loading ) {
        return <h1>Aguarde, su orden de compra se está generando</h1>
    };

    if ( orderId ) {
        return <h1>Su número de orden es { orderId }</h1>
    };

    return (
        <div>
            <h1>CheckOut</h1>
            <CheckOutForm onConfirm= { createOrder }/>
        </div>
    );
};


export default CheckOut;
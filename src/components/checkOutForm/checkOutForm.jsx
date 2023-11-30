import { useState } from "react";


const CheckOutForm = ( { onConfirm } ) => {
    const [ name, setName ] = useState ( '' );
    const [ phone, setPhone ] = useState ( '' );
    const [ email, setEmail ] = useState ( '' );

    const handleConfirm = ( event ) => {
        event.preventDefault ();

        const userData = {
            name, phone, email
        };

        onConfirm ( userData );
    };

    return (
        <div>
            <form onSubmit={ handleConfirm } className="Form" >
                <label className="Nombre" >
                    Nombre
                    <input type="text" className="Input" value={ name } onChange={ ({ target }) => setName ( target.value )}  />
                </label>
                <label className="Telefono" >
                    Teléfono
                    <input type="text" className="Input" value={ phone } onChange={ ({ target }) => setPhone ( target.value )}  />
                </label>
                <label className="Email" >
                    Email
                    <input type="text" className="Input" value={ email } onChange={ ({ target }) => setEmail ( target.value )}  />
                </label>
                <div className="Label">
                    <button type="submit" className="Button" >Crear Orden</button>
                </div>
            </form>
        </div>
    )
}


export default CheckOutForm;

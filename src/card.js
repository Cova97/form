import React from "react";

const Card = (props) => {
    return(
        <>
            <div class="card">
                <div class="container">
                    <h2>{props.nombre} {props.apellido}</h2>
                    <p>Edad: {props.edad}</p>
                    <button onClick={props.onEliminar}>Eliminar</button>
                </div>
            </div>
        </>
    );
};

export default Card;
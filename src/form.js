import React, {useState} from "react";
import Card from "./card";

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "nombre"){
            setNombre(e.target.value);
        }
        if(e.target.name === "apellido"){
            setApellido(e.target.value);
        }
        if(e.target.name === "edad"){
            setEdad(e.target.value);
        }
    };

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(nombre && apellido && edad != null){
            alert('Nuevo usuario agregado')
            const usuario = {
                nombre: nombre,
                apellido: apellido,
                edad: edad
            };
                setUsuarios([...usuarios, usuario]);
                setNombre('');
                setApellido('');
                setEdad('');
        }
        else{
            alert('Faltan datos')
        }
    };

    const handleEliminar = (index) => {
        const nuevosUsuarios = [...usuarios];
        nuevosUsuarios.splice(index, 1);
        setUsuarios(nuevosUsuarios);
    };

    return(
        <>
            <h1>Nuevo Registro</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="nombre"> Nombre:
                    <input 
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre} 
                        onChange={onChange} ></input>
                </label >
                <label htmlFor="apellido"> Apellido:
                    <input 
                        type="text"
                        name="apellido"
                        id="apellido"
                        value={apellido} 
                        onChange={onChange} ></input>
                </label>
                <label htmlFor="edad"> Edad:
                    <input 
                        type="number"
                        name="edad"
                        id="edad"
                        value={edad} 
                        onChange={onChange} ></input>
                </label>
                <button type="submit">Enviar</button>
                <div>
                    <h1>Registros:</h1>
                    {usuarios.map((usuario, index) => (
                        <Card 
                            key={index} 
                            nombre={usuario.nombre} 
                            apellido={usuario.apellido} 
                            edad={usuario.edad} 
                            onEliminar={() => handleEliminar(index)} />
                    ))}
                </div>
            </form>
        </>
    );
};

export default Form;
import { Fragment, useContext, useState } from "react";
import SesionIniciada from "./SesionIniciada";
import modelo9 from "../imagenes/modelo9.jpeg";
import { createContext } from "react";
import React from "react";

export const ImaContext = React.createContext();


const Agregar = () => {

    const [todos, setTodos] = useState([]);




    const [agg, setagg] = useState({
        modelo: "",
        titulo: "",
        descripcion: "",
        precio: 0
      });
    
      const funcion =(e)=>{
        setagg({
            ...agg,
            [e.target.name]: e.target.value,
          });
    
    }

const handle=(e)=>{

const modelo={
    modelo:agg.modelo,
    titulo:agg.titulo,
    descripcion:agg.descripcion,
    precio:agg.precio
}

}

   
   let obj={modelo:"georgina rodriguez", 
descripcion: "la mujer que conquisto al hombre mas guapo de la tierra",
edad: 30} 
    return (  
        <Fragment>
            <form  onSubmit={handle}> 
            <input type="text" onChange={funcion} name="modelo"></input>

            <input type="text" onChange={funcion} name="titulo"></input>

            <input type="text" onChange={funcion} name="descripcion"></input>
            

            <input type="number" onChange={funcion} name="precio"></input>

        <input type="submit" value="enviar"></input>

            </form>

<ImaContext.Provider value={obj}>
<div> 
   </div>
</ImaContext.Provider>

        </Fragment>
     );
}
 
export default Agregar; 
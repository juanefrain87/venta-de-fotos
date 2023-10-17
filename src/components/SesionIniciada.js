import React, { Fragment, useState } from "react";
import "../estiloFotos.css/estilo2.css";
import foto from "../imagenes/foto.webp";
import modelo2 from "../imagenes/modelo2.webp";
import modelo10 from "../imagenes/modelo10.jpeg";
import modelo3 from "../imagenes/modelo3.webp";
import modelo4 from "../imagenes/modelo4.jpeg";
import modelo5 from "../imagenes/modelo5.jpeg";
import modelo6 from "../imagenes/modelo6.jpeg";
import modelo7 from "../imagenes/modelo7.jpeg";
import modelo8 from "../imagenes/modelo8.jpeg";
import modelo9 from "../imagenes/modelo9.jpeg";
import { ImaContext } from "./Agregar";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const SesionIniciada = () => {


  const [carrito, setcarrito]=useState([])
    
    const [todos, setTodos] = useState([]);

    const [agg, setagg] = useState({
        modelo: "",
        titulo: "",
        descripcion: "",
        precio: 0,
        cover:""
      });
    
  
  const [ima, setimagenes] = useState([
    {
     id:1,
      modelo: foto,
      titulo: "angelica rodriguez",
      descripcion: "actriz venozolana nacida en 1999",
      precio: 200,
    },
    {
    id:2,
      modelo: modelo2,
      titulo: "angelica rodriguez",
      descripcion: "actriz venozolana nacida en 1999",
      precio: 150,
    },
    {
        id:4,
      modelo: modelo3,
      titulo: "angelica rodriguez",
      descripcion: "actriz venozolana nacida en 1999",
      precio: 100,
    },
    {
        id:3,
      modelo: modelo4,
      titulo: "angelica rodriguez",
      descripcion: "actriz venozolana nacida en 1999",
      precio: 100,
    },
    {
        id:4,
      modelo: modelo5,
      titulo: "angelica rodriguez",
      descripcion: "actriz venozolana nacida en 1999",
      precio: 100,
    },
  ]);


const z =[]
let s =0
  const handle=(e)=>{
    e.preventDefault();
    const modelo={
        id : Math.floor(Math.random() * 1000) + 1,
        modelo:agg.modelo,
        titulo:agg.titulo,
        descripcion:agg.descripcion,
        precio: parseInt(agg.precio),
        cover:cargarimagen[cargarimagen.length-1]
    }

   
    setTodos([...todos, modelo]);
s=s+1
}
const funcion =(e)=>{
    setagg({
        ...agg,
        [e.target.name]: e.target.value,
      });

}


const [cargarimagen, setcargarimagen] = useState([]); // Cambio a un arreglo vacío

const cargarimag = (e) => {
  const elemento = e.target
  const files = elemento.files; // Obtener todos los archivos seleccionados
  const newImages = Array.from(files).map((file) => {
    return URL.createObjectURL(file); // Crear URL para cada imagen seleccionada
  });
  setcargarimagen([...cargarimagen, ...newImages]); // Agregar las nuevas imágenes al arreglo existente
}
  const use = useContext(ImaContext)


  const comprar= (e)=>{
  setcarrito([...carrito, e]
  )


  }



const [total ,settotal]=useState()

useEffect(() => {
  const total = carrito.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  settotal(total);
}, [carrito]);


  return (
    <Fragment>
      
      <form  onSubmit={handle} ac> 
      <input type="file" name="cover" onChange={cargarimag}></input>
            <input type="text" onChange={funcion} name="modelo"></input>

            <input type="text" onChange={funcion} name="titulo"></input>

            <input type="text" onChange={funcion} name="descripcion"></input>
            

            <input type="number" onChange={funcion} name="precio"></input>

        <input type="submit" onClick={handle} value="enviar"></input>

            </form>
            {carrito.map((elemento) => (
        <h1 key={elemento}>{elemento}  </h1>
      ))}
<h1> total de compras$ {total}</h1>

<div className="padre"> 
      {ima.map((e) => (
         
        <div key={e.id} className="contenedorimagenes" >
          <div className="front"> 
       
        <img src={e.modelo} className="imagen-modelo"></img>
        </div>
        <div className="back">
          <h1 className="contenedorprecio">{e.precio}</h1>
         <p className="tex">  {e.id} {e.titulo} {e.descripcion} Soy una modelo excepcional, reconocida por mi talento y belleza. Mi tez morena resalta mis rasgos distintivos y añade un encanto único a mi apariencia. Con mi estatura alta, destaco en las pasarelas y sesiones fotográficas, capturando la atención de todos con mi presencia magnética.</p>   
        <Link to={"/datos"}>  
        <input type="submit" className="comprar" value="comprar" onClick={() => comprar(e.precio)}></input>
        </Link>
       
         </div>
        </div>
       
      ))}
      
      {todos.map((imagen, index) => (
        <div className="flip-card"> 
  <div className="contenedorimagenes">
    <div className="front" key={imagen.id}>  
    <img   key={index} src={imagen.cover} alt={`Imagen ${index + 1}`} />
    </div>
    <div className="back"> 
    <h1 className="contenedorprecio">{imagen.precio}</h1>
    <p> {imagen.modelo}  {imagen.titulo} {imagen.descripcion}</p>
    <input type="submit" className="comprar" value="comprar" onClick={() => comprar(imagen.precio)}></input>
    </div>
    </div> 
  </div>
))}


 </div>
    
    </Fragment>
  );
};

export default SesionIniciada;
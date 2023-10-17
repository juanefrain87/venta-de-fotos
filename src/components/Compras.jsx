
import React, { useState, useEffect} from 'react';

import "./comprasstyle.css"
import axios from 'axios';

const Compras = ({ propEjemplo }) => {
    const [datos, setDatos] = useState([]);
  


    const eliminar = (nombre) => {
      const elemento = datos.find((tarea) => tarea.nombre === nombre);
          axios
        .post("http://localhost/xxx.php", elemento) 
        .then(({ data }) => {
          console.log("datos" + data);
         
        })
        .catch(() => {});
    }
     useEffect(() => {
      axios.get('http://localhost/x.php')
          .then((response) => {
            setDatos(response.data);
          })
          .catch((error) => {
            console.error('Error al obtener datos:', error);
          });
      }, []);

console.log(datos);

const [c,cc]=useState()
const enviarNombre = (nombre) => {
cc(nombre)
  
};
return (
    <>
    <div id="superior">
      {c}
     
        <div id="logo">
            
            
        </div>
        <div id="usuario">
            <div id="navbar">
                <div id="foto"></div>
                <div id="name">
                    <p id="nombrePerfi">Anna rodriguez</p>
                    <p id="correo">annarodriguez@gmail.com</p>
                </div>
            </div>

        </div>

    </div>
    <div id="contenedor_principal">
        <div id="menu">
            <div id="int">
                
                <p >ver como negocio </p>  
                <input type="text" placeholder="buscar" id="buscadormenu"/>
            </div>
            <div className="datos">perfil</div>
            <div id="nego">negocios</div>
            <div className="datos">publicaciones</div>
            <div className="datos">clientes</div>



        </div>
        <div id="derecha">


<div id="contenedorp">
    <p id="negoci">Negocios</p>
   
</div>

<div id="buscador">
    <input type="text" placeholder="buscar por  nombre del negocio celular o correo electronico" id="input1"  />
    <input type="text" id="input2" placeholder="ordenar por status" />
    <input type="text" id="input2" placeholder="todos los status" />
</div>

            <div id="table">
            <table>
  <tr className='pri'>
    <td>nombre</td>
    <td>direccion</td>
    <td>telefono</td>
    <td>comentarios</td>
    <td>button</td>
  </tr>
 
      {datos.map((e, index) => (
        <tr key={index}>
          <td>{e.nombre}</td>
          <td>{e.direccion}</td>
          <td>{e.telefono}</td>
          <td>{e.comentarios}</td>
            <td><form action="http://localhost/xxx.php" method='post'>
              <input type="text" name='c' value={c} className='no' />
              <button onClick={() => enviarNombre(e.nombre)}>Eliminar</button>
              
              </form> </td>
        </tr>
      ))}
  

  
</table>

                  
            </div>

        </div>
        
          
    </div>
    

    
    </>
  );
};

export default Compras;
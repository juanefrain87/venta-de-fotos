import { Fragment } from "react";
import "./date.css"
const Datos = () => {
    return ( 
      



<div class="padree">
     
    <form action="http://localhost/xx.php" method="post" class="form">
      <h1 class="title">ingresa tus datos</h1>

      <div class="inputContainer">
        <input type="text" class="input"  name="nombre" />
        <label for="" class="label">ingresa tu nombre</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input"   name="direccion"/>
        <label for="" class="label">direccion</label>
      </div>

      <div class="inputContainer">
        <input type="number"  class="input"  name="telefono"/>
        <label for="" class="label" >numero de telefono </label>
      </div>

      <div class="inputContainer">
        <textarea type="text" class="input1 input"   name="comentarios"/>
        <label for="" class="label">comentarios</label>
      </div>

      <input type="submit" class="submitBtn" value="enviar"/>
    </form>
    
  </div>
       
     );
}
 
export default Datos;
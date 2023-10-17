import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./mi.css"
function MiComponente() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost/bd.php')
      .then((response) => {
        // Establecer los datos en el estado del componente
        setDatos(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  return (
    <div>
      {/* Renderizar los datos en el componente */}
      <ul>
        {datos.map((dato) => (
          <li key={dato.id}>{dato.gmail}</li>
        ))}
      </ul>
    </div>
  );
}

export default MiComponente;

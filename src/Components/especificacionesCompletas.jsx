import React from 'react';
import {Link} from 'react-router-dom';

export default function EspecificacionesCompletas(){
  return(
    <div className = "especificacionesCompletadas">
      <h22>Especificaciones ingresadas exitosamente</h22>
      <Link to= "/buscador"><button className="pasarAlBuscador">Pasar al buscador</button></Link>
    </div>
);
}

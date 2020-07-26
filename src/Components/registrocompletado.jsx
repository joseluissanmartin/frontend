import React from 'react';
import {Link} from 'react-router-dom';

export default function Registrocompletado(){
  return(
    <div className = "especificacionesCompletadas">
      <h22>Registro completado</h22>
      <Link to= "/perfilDeUsuario"><button className="pasarAlBuscador">Ir al perfil</button></Link>
      <Link to= "/inicio"><button className="pasarAlinicio">Volver a inicio</button></Link>
    </div>
);
}

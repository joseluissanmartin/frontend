import React from 'react';
import {Link} from 'react-router-dom';
import Exito from './Images/exito.gif';

export default function Registrocompletado(){
  return(
    <div className = "especificacionesCompletadas">
      <div className="registroCompletado">Registro completado</div>
      <Link to= "/perfilDeUsuario"><button className="pasarAlBuscador">Ir al perfil</button></Link>
      <Link to= "/inicio"><button className="pasarAlinicio">Volver a inicio</button></Link>
      <Link to= "/perfilDeUsuario"><img className="exito" src= {Exito} alt="C Exito"/></Link>
    </div>
);
}

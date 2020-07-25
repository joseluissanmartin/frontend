import React from 'react';
import {Link} from 'react-router-dom';
import FotoPerfil from './Images/usuario.png';
import Carrito from './Images/carrito.png';


export default function articlePerfilDeUsuario(){
  return(
    <>
    <div className = "perfilDeUsuario" >

    <img className ="fotoPerfil" src= {FotoPerfil} alt="A FotoPerfil"/>
    <h25>Nombre de usuario:</h25>
    <h26>Email:</h26>
    <h27>Edad:</h27>

    <button className ="botonHistorialCompras">Historial de Compras</button>
    <Link to= "/ingresoPreferencias"><button className ="botonIngresoPreferencias" >Ingresar preferencias</button></Link>

    <img className ="carritoPerfil" src= {Carrito} alt="A carritoPerfil"/>

    <div className = "infoDeinteres">
    <h28>Mis generos Favoritos:</h28>
    <h29>Ultimos comprados:</h29>
    </div>

    </div>

    <div className = "notificacionPerfil" >

      <h23>¿Aun no ingresas las caracteristicas de tu equipo?</h23>
      <Link to= "/ingresoEspecificaciones"><button className = "ingresarLascaracteristicasDesdeNotificacion">Ingresar</button></Link>
      <div />
      <h24>¿Deseas cambiar las caracteristicas de tu equipo?</h24>
      <Link to= "/ingresoEspecificaciones"><button className = "cambiarLascaracteristicasDesdeNotificacion">Cambiar</button></Link>
    </div>
    </>

);
}

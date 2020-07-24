import React from 'react';
import Lupa from './Images/lupa.png';


export default function ArticleBuscador(){
  return(
    <articleBuscador>
    <buscador>
    <div className = "consulta">
      <input type = "consulta" name = "consulta" placeholder= "Que juego te gustaria buscar? " />
    </div>
    <img className ="lupa" src={Lupa} alt="A Lupa"/>
    <button className = "botonBuscar">Buscar</ button>
    </buscador>
    <div className = "resultados">
    <h20>Ordenar por Precio:</h20>
    <select className = "ordenarPorPrecio">
    <option>Ascendente</option>
      <option>Descendente</option>
      <option>Menores a $5 mil</option>
      <option>mayores o iguales a $5 mil</option>
      <option>Mayoyes o iguales a $10 mil</option>
      <option>Mayoyes o iguales a $20 mil</option>
      <option>Mayoyes o iguales a 40 mil</option>
    </select>
    <h21>Genero:</h21>
    <select className = "ordenarPorgenero">
    <option>Todos los generos</option>
      <option>Lucha</option>
      <option>Deporte</option>
      <option>Conducción</option>
      <option>Rol</option>
      <option>Shooter</option>
      <option>Mundo abierto</option>
    </select>
    <div className = "contenidoResultados">
    <h15>Nombre</h15>
    <h16>Genero</h16>
    <h17>Compatibilidad con el equipo</h17>
    <h18>Precio</h18>
    <h19>Al carrito</h19>
    </div>
    </div>

    </articleBuscador>

  );
}

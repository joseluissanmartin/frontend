import React from 'react';
import Carrito from './Images/carrito.png';

export default function ArticleCatalogo(){
  return(
    <article>
      <div className ="marco">
        <h7 className = "buscarCatalogo">Buscar</h7>
        <select id = "juegoSeleccionado" class="seleccionarJuego">
          <option disable>Ver catalogo</option>
          <option value ="gta">GTA V</option>
          <option value ="cod">COD: Modern Warzone</option>
          <option value ="borderlands">Borderlands 3</option>
        </select>
        <article className ="articleChico">
          <div>
            <label className = "etiquetaNombre" ><h8>Nombre:</h8></label>
            <label className = "etiquetaPrecio" ><h9>Precio:</h9></label>
            <label className = "etiquetaComprar" ><h10>Comprar</h10></label>
          </div>
          <label className = "nombreGame"></label>
          <label className = "price"></label>
          <img className ="carrito" src={Carrito} alt="A Carrito"/>
        </article>
        </div>

    </article>
  );
}

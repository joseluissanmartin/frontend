import React from 'react';
import {Link} from 'react-router-dom';



export default function ArticleEspecificaciones(){

  return(
    <article>
      <h12>Caracteristicas de tu equipo</h12>
      <div className = "notificacion">
      <h13>Problema para ingresar las caracteristicas de tu equipo ? haz click aqui: </h13>
      <button className = "botonayuda">Ayuda</button>
      </ div>
      <div className ="conjunto1">
      <h14>Sistema operativo: </h14>
      <select className = "conjuntocaracteristicas">
      <option>Busque su Sistema Operativo</option>
        <option>Windows 10</option>
        <option>Windows 8 o 8.1</option>
        <option>Windows 7</option>
        <option>Windows Xp o Vista</option>
        <option>MacOS</option>
        <option>Linux</option>
      </select>
      <h14>Procesador: </h14>
      <select className = "conjuntocaracteristicas">
        <option>Busque su Procesador</option>
        <option>Intel core 2 duo</option>
        <option>Intel core 2 quad</option>
        <option>Intel core i3</option>
        <option>Intel core i5</option>
        <option>Intel core i7</option>
        <option>Intel core i9</option>
      </select>
      <h14>Almacenamineto libre: </h14>
      <select className = "conjuntocaracteristicas">
        <option>De cuanto espacio libre dispone?</option>
        <option>Menos de 10GB</option>
        <option>Más de 10 GB</option>
        <option>Más de 50 GB</option>
        <option>Más de 100 GB</option>
        <option>Más de 500GB</option>
      </select>
      <h14>Memoria Ram:</h14>
      <select className = "conjuntocaracteristicas">
        <option>Seleccione la cantidad de memoria RAM</option>
        <option>Menos de 2GB</option>
        <option>2GB o mas </option>
        <option>4GB o mas </option>
        <option>8GB o mas</option>
        <option>16GB o mas</option>
      </select>
      <h14>Tarjeta grafica:</h14>
      <select className = "conjuntocaracteristicas">
        <option>Seleccione la tageta grafica que posee</option>
        <option>Intel Hd Graphics 5000</option>
        <option>AMD radeon 5000</option>
        <option>GTX 1060</option>
        <option>MSI</option>
        <option>Zotac</option>
      </select>
      <h14>Direct X: </h14>
      <select className = "conjuntocaracteristicas">
        <option>Seleccione su Direct</option>
        <option>Directx 7</option>
        <option>Directx 8</option>
        <option>Directx 9</option>
        <option>Directx 10</option>
        <option>Directx 11 o mas</option>
      </select>
      </div>

      <Link to= "/ingresoEspecificacionesCompletado"><button className= "datospcusuario">Guardar</button></Link>
  </article>


  );
}

/*
<article>
  <div class ="marco">
    <h7 class= "buscarCatalogo">Buscar</h7>
    <select id="juegoSeleccionado" class="seleccionarJuego">
      <option disable>Ver catalogo</option>
      <option value="gta">GTA V</option>
      <option value="cod">COD: Modern Warzone</option>
      <option value="borderlands">Borderlands 3</option>
    </select>
    <article class="articleChico">
      <div>
        <label class= "etiquetaNombre" ><h8>Nombre:</h8></label>
        <label class= "etiquetaPrecio" ><h9>Precio:</h9></label>
        <label class= "etiquetaComprar" ><h10>Comprar</h10></label>
      </div>
      <label class= "nombreGame"></label>
      <label class= "price"></label>
      <img class ="carrito" src={Carrito} alt="A Carrito"/>
    </article>
    </div>

</article>

*/

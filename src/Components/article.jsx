import React from 'react';
import Juego from './Images/juego.png';
import {Link} from 'react-router-dom';



export default function Article() {
  return(

    <article>
        <h2>Los mas buscados de la semana:</h2>
        <img className="imagen1" src= {Juego} alt="A Juego"/>
        <img className="imagen2" src= {Juego} alt="B Juego"/>
        <img className="imagen3" src= {Juego} alt="C Juego"/>
        <Link to= "/ingresoEspecificaciones"><button className= "Buscar">Buscar</button></Link>
        <button className="Ayuda">Pedir ayuda</button>
    </article>
  );
}

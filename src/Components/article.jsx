import React from 'react';
import Zero from './Images/zero.gif';
import Ark from './Images/ark.gif';
import Gta from './Images/gta.gif';
import {Link} from 'react-router-dom';



export default function Article() {
  return(

    <article>
        <h2>Los mas buscados de la semana:</h2>
        <Link to= "/catalogo"><img className="imagen1" src= {Ark} alt="A Juego"/></Link>
        <Link to= "/catalogo"><img className="imagen2" src= {Zero} alt="B Juego"/></Link>
        <Link to= "/catalogo"><img className="imagen3" src= {Gta} alt="C Juego"/></Link>
        <Link to= "/ingresoEspecificaciones"><button className= "Buscar">Buscar</button></Link>
        <button className="Ayuda">Pedir ayuda</button>
        <div className="borderlands">ARK</div>
        <div className="ark">borderlands 2</div>
        <div className="gta">Gta V</div>
    </article>
  );
}

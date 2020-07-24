import React from 'react';
import {Link} from 'react-router-dom';
import Lucha from './Images/lucha.png';
import Plataforma from './Images/plataforma.png';
import SandBox from './Images/sandBox.png';
import Accion from './Images/accion.png';
import Multi from './Images/multi.png';
import MultiOff from './Images/multioff.png';
import Aventura from './Images/aventura.png';
import Misterio from './Images/misterio.png';
import Ciencia from './Images/ciencia.png';
import Terror from './Images/terror.png';
import Deportes from './Images/deportes.png';
import Estrategia from './Images/estrategia.png';
import Rol from './Images/rol.png';

export default function ArticlePreferencias(){
  return(
    <>
    <div className = "cuadroPreferencias">
      <h30>¿Que generos llaman tu atencion?</h30>
      <h31>Elige uno o mas</h31>
      <Link to= "/perfilDeUsuario"><button className ="botonGuardarPreferencias">Guardar</button></Link>
      <Link to= "/perfilDeUsuario"><button className ="botonCancelarPreferencias">Candelar</button></Link>
    </div>
    <div className ="botonesopcionesPreferencias" >
    <button className ="etiquetalucha" ><img src= {Lucha} alt="A lucha"/></button>
    <button className ="etiquetaplataforma" ><img src= {Plataforma} alt="A plataforma"/></button>
    <button className ="etiquetasandBox" ><img src= {SandBox} alt="A sandBox"/></button>
    <button className ="etiquetaaccion" ><img src= {Accion} alt="A accion"/></button>
    <button className ="etiquetamulti" ><img src= {Multi} alt="A multi"/></button>
    <button className ="etiquetamultioff" ><img src= {MultiOff} alt="A multioff"/></button>
    <button className ="etiquetaaventura" ><img src= {Aventura} alt="A aventura"/></button>
    <button className ="etiquetamisterio" ><img src= {Misterio} alt="A misterio"/></button>
    <button className ="etiquetaciencia" ><img src= {Ciencia} alt="A ciencia"/></button>
    <button className ="etiquetaterror" ><img src= {Terror} alt="A terror"/></button>
    <button className ="etiquetadeportes" ><img src= {Deportes} alt="A deportes"/></button>
    <button className ="etiquetaestrategia" ><img src= {Estrategia} alt="A estrategia"/></button>
    <button className ="etiquetarol" ><img src= {Rol} alt="A rol"/></button>
    </div>
    </>
);
}

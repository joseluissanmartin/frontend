import React from 'react';
import Clap from './Images/clap.gif';
import {Link} from 'react-router-dom';

export default function Section(props){
  return(
    <section>

    <li>
        <a
     onClick={() => {
     window.location.href = "/inicio";
     }}
     >
     Inicio
        </a>
    </li>

    <li>
        <a
     onClick={() => {
     window.location.href = "/registro";
     }}
     >
     Registrarse
        </a>
     </li>

     <li>
        <a
     onClick={() => {
     window.location.href = "/catalogo";
     }}
     >
     Catalogo
        </a>
     </li>

<Link to= "/inicio"><img className="imagenClap" src= {Clap} alt="A Clap" /></Link>

    </section>
  );
}

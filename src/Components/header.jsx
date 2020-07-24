import React from 'react';
import Titulo from './Images/titulo.png';
import Logo from './Images/logo.png';
import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <header>

      <div className = "tarjeta"/>
      <img className ="imagen0" src={Logo} alt="A Logo"/>
      <Link to= "/inicio"><img className="imagenTitulo" src= {Titulo} alt="A Titulo" /></Link>

     </header>
  );
}

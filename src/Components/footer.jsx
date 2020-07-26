import React from 'react';
import Maquina from './Images/maquina.gif';
import {Link} from 'react-router-dom';


export default function Footer(){
  return(
    <>
    <Link to= "/inicio"><img className="imagenmaquina" src= {Maquina} alt="A Titulo" /></Link>
    </>
);
}

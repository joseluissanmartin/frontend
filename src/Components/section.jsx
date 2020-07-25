import React from 'react';

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

     <li>
        <a
     onClick={() => {
     window.location.href = "/ingresoEspecificaciones";
     }}
     >
     Ingreso de especificaciones
        </a>
     </li>

     <li>
        <a
     onClick={() => {
     window.location.href = "/buscador";
     }}
     >
     Buscador
        </a>
     </li>
    </section>
  );
}

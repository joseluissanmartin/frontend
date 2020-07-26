import React from 'react';
import Header from '../Components/header';
import Section from '../Components/section';
import Login from '../Components/login';

export default function Registro(props){
  return(
    <>
    <Header />
    <Login {...props} />
    <Section />

    <h11>Pagina no encontrada 404</h11>

    </>
);
}

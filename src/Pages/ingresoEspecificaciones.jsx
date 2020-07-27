import React from 'react';
import Header from '../Components/header';
import Login from '../Components/login';
import Section from '../Components/section';
import ArticleEspecificaciones from '../Components/articleEspecificaciones';


export default function IngresoEspecificaciones(props){
  return(
    <>
    <Header />
    <Login />
    <Section />
    <ArticleEspecificaciones {...props} />
    </>
);
}

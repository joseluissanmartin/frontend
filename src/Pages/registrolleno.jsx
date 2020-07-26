import React from 'react';
import Header from '../Components/header';
import Login from '../Components/login';
import Section from '../Components/section';
import ArticleEspecificaciones from '../Components/articleEspecificaciones';
import Registrocompletado from '../Components/registrocompletado';


export default function Registrolleno(){
  return(
    <>
    <Header />
    <Login />
    <Section />
    <ArticleEspecificaciones />
    <Registrocompletado />
    </>
);
}

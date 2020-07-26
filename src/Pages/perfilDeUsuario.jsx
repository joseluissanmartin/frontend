import React from 'react';
import Header from '../Components/header';
import Section from '../Components/section';
import ArticlePerfilDeUsuario from '../Components/articlePerfilDeUsuario';
import PerfilDeUsuarioInfo from '../Components/perfilDeUsuarioInfo';


export default function PerfilDeUsuario(){
  return(
    <>
    <Header />
    <div className = "sectionPerfil">
      <Section />
    </div>
    <ArticlePerfilDeUsuario/>
    </>

);
}

import React from 'react';
import Header from '../Components/header';
import Login from '../Components/login';
import ArticleRegistro from '../Components/articleRegistro';
import Section from '../Components/section';
import Footer from '../Components/footer';


export default function Registro(props){
  return(
    <>
    <Header />
    <Login />
    <Section />
    <ArticleRegistro {...props}  />
    <Footer/>

    </>
);
}

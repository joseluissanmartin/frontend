import React from 'react';
import UsuarioTable from './usuarioTable';
import { getDatos } from '../api';


export default class PerfilDeUsuarioInfo extends React.Component {
  componentDidMount(){
    getDatos()
  }

render() {
  return(
    <UsuarioTable />
    );
  }
}

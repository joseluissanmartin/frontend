
import React from 'react';
import UsuarioTable from './usuarioTable';
import { getDatos } from '../api/index';


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


import React from 'react';
import './App.css';
import Inicio from './Pages/inicio';
import Catalogo from './Pages/catalogo';
import Registro from './Pages/registro';
import IngresoEspecificaciones from './Pages/ingresoEspecificaciones';
import IngresoEspecificacionesCompletado from './Pages/ingresoEspecificacionesCompletado';
import Buscador from './Pages/buscador';
import PerfilDeUsuario from './Pages/perfilDeUsuario';
import IngresoPreferencias from './Pages/ingresoPreferencias';
import Notfund from './Pages/notfund';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App(){
    return(
      <Router>
      <Switch>
      <Route exact path= "/inicio"><Inicio /></ Route>
      <Route path = "/registro"><Registro /></ Route>
      <Route path = "/catalogo"><Catalogo /></ Route>
      <Route path = "/ingresoEspecificaciones"><IngresoEspecificaciones /></ Route>
      <Route path = "/ingresoEspecificacionesCompletado"><IngresoEspecificacionesCompletado /></ Route>
      <Route path = "/buscador"><Buscador /></ Route>
      <Route path = "/login"><PerfilDeUsuario /></ Route>
      <Route path = "/ingresoPreferencias"><IngresoPreferencias /></ Route>
      <Route path ="*"><Notfund /></ Route>
      < /Switch>
      </ Router>
    );
  }
export default App;

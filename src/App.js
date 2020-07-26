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
      <Route exact path= "/inicio" component={Inicio} />
      <Route path = "/registro" component={Registro} />
      <Route path = "/catalogo" component={Catalogo} />
      <Route path = "/ingresoEspecificaciones" component={IngresoEspecificaciones} />
      <Route path = "/ingresoEspecificacionesCompletado" component={IngresoEspecificacionesCompletado} />
      <Route path = "/buscador" component={Buscador} />
      <Route path = "/perfilDeUsuario" component={PerfilDeUsuario} />
      <Route path = "/ingresoPreferencias" component={IngresoPreferencias} />
      <Route path ="*" component={Notfund} />
      </Switch>
      </Router>
    );
  }
export default App;

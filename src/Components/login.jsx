import React from 'react';
import InputLine from './inputLine';
import { validatePassword, validateCorreo } from './validations';
import {Link} from 'react-router-dom';
import { login } from '../api';


export default class Login extends React.Component {
  state = {
    loginData: {
      correo: '',
      password: ''
    },
    errors: {
      correo: false,
      password: false
    }
  };

  doLogin = (event) => {
    event.preventDefault();

    login(this.state.loginData)
      .then((response) => {
        return response.text();
      })

      .then((token) => {
        localStorage.setItem('token', token);
        this.props.history.push('/perfilDeUsuario');
      });

/*
      .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push('/perfilDeUsuario');
      });
      */
  }

  onChange = (name, event) => {
    const value = event.target.value;
    const loginData = Object.assign({}, this.state.loginData);
    loginData[name] = value;
    this.setState({
      loginData
    });
  }

render() {
  const { correo, password } = this.state.loginData;
  const { errors } = this.state;

  return (
    <header>
    <div className= "registro">
   <form>

    <div className="email">

      <InputLine
      name="correo"
      label="Correo"
      type="text"
      onChange={this.onChange}
      error={errors.correo}
      value={correo}
      placeholder="Ingrese su e-mail"
      />

    </div>

    <div className="password">

      <InputLine
      name="password"
      label="Contrase&ntilde;a"
      type="password"
      onChange={this.onChange}
      error={errors.password}
      value={password}
      placeholder="Ingrese su contrase&ntilde;a"
      />

    </div>

    <div className="p">
      <div className="u">
  <input type="radio" name="ua" value="u"/><h4>Usuario</h4>
      </div>
      <div className="a">
  <input type="radio" name="ua" value="a"/><h5>Administrador</h5>
      </div>
   </div>

      <button className="Iniciar"
      onClick={this.doLogin}>Iniciar sesi&oacute;n
      </button>

      <Link to="/registro">

      <button className="Registrarse">Registrarse</button>

       < /Link>
    </form>
   </div>
   </ header>
    );
  }
}

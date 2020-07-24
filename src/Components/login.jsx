import React from 'react';
import InputLine from './inputLine';
import { validatePassword, validateEmail } from './validations';
import {Link} from 'react-router-dom';
import { login } from '../api';


export default class Login extends React.Component {
  state = {
    loginData: {
      email: '',
      password: ''
    },
    errors: {
      email: false,
      password: false
    }
  };

  doLogin = (event) => {
    event.preventDefault();

    login(this.state.loginDate);
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
  const { email, password } = this.state.loginData;
  const { errors } = this.state;

  return (
    <header>
    <div className= "registro">
   <form>

    <div className="email">

      <InputLine
      name="email"
      label="Correo"
      type="text"
      onChange={this.onChange}
      error={errors.email}
      value={email}
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

      <button Class="Iniciar"
      onClick={this.doLogin}>Iniciar sesi&oacute;n
      </button>

      <Link to="/registro">

      <button class="Registrarse">Registrarse</button>

       < /Link>
    </form>
   </div>
   </ header>
    );
  }
}
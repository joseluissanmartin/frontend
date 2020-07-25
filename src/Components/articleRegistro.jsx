import React from 'react';
import InputLine from './inputLine';
import SelectLine from './selectLine';
import TextareaLine from './textareaLine';
import OutputLine from './outputLine';
import { validateEmail, isEmpty } from './validations';
import {Link} from 'react-router-dom';

export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      email: '',
      password: '',
      confirmation: '',
      age: '',
    },
    errors: {
      email: false,
      password: false,
      confirmation: false,
      age: false,
    }
  };
  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData);
    registerData[name] = value;
    this.setState({
      registerData
    });
  }

  validateConfirmation = (value, compareValue) => {
    if (this.isEmpty(value)) {
      return false;
    }

    if (value !== compareValue) {
      return false;
    }

    return true;
  }

  doRegister = (event) => {
    const {
      email,
      password,
      confirmation,
      age,
    } = this.state.registerData;

    const emailError = !validateEmail(email);
    const passwordError = isEmpty(password);
    const confirmationError = !this.validateConfirmation(confirmation, password);
    const ageError = isEmpty(age);

    this.setState({
      errors: {
        email: emailError,
        password: passwordError,
        confirmation: confirmationError,
        age: ageError,
      }
    });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      confirmation,
      age
    } = this.state.registerData;
    const { errors } = this.state;


  return(
    <article className="formulario">
    <form>

      <div className ="marco">
      <h32>email</h32>
        <div class="ordenRegistro">
          <InputLine
              name="email"
              type="email"
              required={true}
              onChange={this.onChange}
              error={errors.email}
              value={email}
              placeholder="correo@ejemplo.cl"
          />
        </div>
      <h32>Contrase&ntilde;a</h32>
        <div class="ordenRegistro">
          <InputLine
              name="password"
              type="password"
              required={true}
              minLength="4"
              maxLength="8"
              onChange={this.onChange}
              error={errors.password}
              value={password}
              placeholder="Ingrese una contraseña"
          />
        </div>
    <h32>Repita Contrase&ntilde;a</h32>
      <div class="ordenRegistro">
         <InputLine
             name="confirmation"
             label="Repite Contrase&ntilde;a"
             type="password"
             required={true}
             minLength="4"
             maxLength="8"
             onChange={this.onChange}
             error={errors.confirmation}
             value={confirmation}
             placeholder="Repita la contraseña"
         />
        </div>
    <h32>Ingrese su edad</h32>
      <div class="ordenRegistro">
          <InputLine
              name="age"
              label="Edad"
              type="number"
              min="1"
              max="150"
              step="any"
              required={true}
              onChange={this.onChange}
              error={errors.age}
              value={age}
          />
        </div>

      <button className="botoncPerfil"
      onClick={this.doRegister}>
      Crear Perfil
      </button>

      <Link to="/inicio">

      <button className="botoncancelar">
      Cancelar
      </button>

      < /Link>
      </div>
      </form>
    </ article>
  );
}
}

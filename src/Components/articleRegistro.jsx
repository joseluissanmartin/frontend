import React from 'react';
import InputLine from './inputLine';
import SelectLine from './selectLine';
import TextareaLine from './textareaLine';
import OutputLine from './outputLine';
import { validateCorreo, isEmpty } from './validations';
import {Link} from 'react-router-dom';
import { register } from '../api';

export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      correo: '',
      password: '',
      confirmation: '',
      age: '',
    },
    errors: {
      correo: false,
      password: false,
      confirmation: false,
      age: false,
    }
  };

  doRegister = (event) => {
    event.preventDefault();

    register(this.state.registerData)
      .then((response) => {
        return response.text();
    })

      .then((token) => {
        localStorage.setItem('token', token);
        this.context.history.push('/perfilDeUsuario')
    });
  }

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
      correo,
      password,
      confirmation,
      age,
    } = this.state.registerData;

    const correoError = !validateCorreo(correo);
    const passwordError = isEmpty(password);
    const confirmationError = !this.validateConfirmation(confirmation, password);
    const ageError = isEmpty(age);

    this.setState({
      errors: {
        correo: correoError,
        password: passwordError,
        confirmation: confirmationError,
        age: ageError,
      }
    });

    event.preventDefault();
  }

  render() {
  const {
      correo,
      password,
      confirmation,
      age
    } = this.state.registerData;
  const { errors } = this.state;


  return(
    <article className="formulario">
    <form>

      <div className ="marco">
      <div>email</div>
        <div className="ordenRegistro">
          <InputLine
              name="correo"
              type="email"
              required={true}
              onChange={this.onChange}
              error={errors.correo}
              value={correo}
              placeholder="correo@ejemplo.cl"
          />
        </div>
      <div>Contrase&ntilde;a</div>
        <div className="ordenRegistro">
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
    <div>Repita Contrase&ntilde;a</div>
      <div className="ordenRegistro">
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
    <div>Ingrese su edad</div>
      <div className="ordenRegistro">
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

import React from 'react';
import InputLine from './inputLine';
import SelectLine from './selectLine';
import TextareaLine from './textareaLine';
import OutputLine from './outputLine';
import { validateCorreo, isEmpty } from './validations';
import {Link} from 'react-router-dom';
import Border from './Images/border.gif';
import { especs } from '../api/indexespecs';

export default class EspecsForm extends React.Component {
  state = {
    especsData: {
      correo:'',
      password:'',
      sistema_o: '',
      procesador: '',
      almacenamiento: '',
      ram: '',
      grafica: ''
    },
    errors: {
      correo: false,
      password: false,
      sistema_o: false,
      procesador: false,
      almacenamiento: false,
      ram: false,
      grafica: false
    }
  };

  doEspecs = (event) => {

    event.preventDefault();

    especs(this.state.especsData)


      .then((response) => {
        return response.text();
    })

      .then((token) => {
        localStorage.setItem('token', token);
        this.props.history.push('/buscador');
    });
  }
  onChange = (name, event) => {
    const value = event.target.value;
    const especsData = Object.assign({}, this.state.especsData);
    especsData[name] = value;
    this.setState({
      especsData
    });
  }

  render() {
  const {
      correo,
      password,
      sistema_o,
      procesador,
      almacenamiento,
      ram,
      grafica
    } = this.state.especsData;
  const { errors } = this.state;


  return(
    <>
    <article>
    <h12>Caracteristicas de tu equipo</h12>
    <div className = "notificacion">
    <h13>Problema para ingresar las caracteristicas de tu equipo ? haz click aqui: </h13>
    <button className = "botonayuda">Ayuda</button>
    </div>

      <div className ="conjunto1">

      <div>Sistema operativo</div>

        <div className="ordenRegistro">
          <InputLine
              name="sistema_o"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.sistema_o}
              value={sistema_o}
              placeholder="ej: windows 10"
          />
        </div>

      <div>Procesador</div>
        <div className="ordenRegistro">
          <InputLine
              name="procesador"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.procesador}
              value={procesador}
              placeholder="Ej: intel i5, AMD, ... etc."
          />
        </div>

      <div>Almacenamineto libre</div>
        <div className="ordenRegistro">
          <InputLine
             name="almacenamiento"
             type="text"
             required={true}
             onChange={this.onChange}
             error={errors.almacenamiento}
             value={almacenamiento}
             placeholder="10Gb, 20GB, 50GB, ... etc."
            />

          </div>

      <div>Memoria RAM</div>
        <div className="ordenRegistro">
            <InputLine
                name="ram"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.ram}
                value={ram}
                placeholder="Ej: 2GB, 4GB, 8Gb, ... etc."
             />

          </div>

      <div>Tarjeta Grafica</div>
        <div className="ordenRegistro">
            <InputLine
                name="grafica"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.grafica}
                value={grafica}
                placeholder="Ej:Intel, AMD, Nvidia 2GB, 4GB,.. etc."
            />
          </div>

        <button className= "datospcusuario"
        onClick={this.doEspecs}>
          Guardar
        </button>
      </div>

     </article>
     <Link to= "/inicio"><img className="imagenBorder" src= {Border} alt="A Border" /></Link>
     </>
    );
  }
}

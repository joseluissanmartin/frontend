import React from 'react';
import {Link} from 'react-router-dom';

export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      so: '',
      procesador: '',
      almacenamiento: '',
      memoria: '',
      grafica: '',
      direct: '',
    },
    errors: {
      so: false,
      procesador: false,
      almacenamiento: false,
      memoria: false,
      grafica: false,
      direct: false
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
        this.props.history.push('/inicio');
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
  render() {
    const {
        so,
        procesador,
        almacenamiento,
        memoria,
        grafica,
        direct
      } = this.state.registerData;
    const { errors } = this.state;


    return(
      <article>

        <h12>Caracteristicas de tu equipo</h12>
        <div className = "notificacion">
        <h13>Problema para ingresar las caracteristicas de tu equipo ? haz click aqui: </h13>
        <button className = "botonayuda">Ayuda</button>
        </ div>

        <div className ="conjunto1">

        <div>Sistema operativo</div>

          <div className="ordenRegistro">
            <InputLine
                name="so"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.so}
                value={so}
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
                name="memoria"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.memoria}
                value={memoria}
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
      <div>Direct</div>
        <div className="ordenRegistro">
            <InputLine
                name="direct"
                type="numbrer"
                required={true}
                onChange={this.direct}
                error={errors.grafica}
                value={direct}
                placeholder="Ej:7 , 8 ,9, 10"
            />
              </div>

        </div>

        <Link to= "/ingresoEspecificacionesCompletado"><button className= "datospcusuario">Guardar</button></Link>
    </article>
  }

  




/*
<article>
  <div class ="marco">
    <h7 class= "buscarCatalogo">Buscar</h7>
    <select id="juegoSeleccionado" class="seleccionarJuego">
      <option disable>Ver catalogo</option>
      <option value="gta">GTA V</option>
      <option value="cod">COD: Modern Warzone</option>
      <option value="borderlands">Borderlands 3</option>
    </select>
    <article class="articleChico">
      <div>
        <label class= "etiquetaNombre" ><h8>Nombre:</h8></label>
        <label class= "etiquetaPrecio" ><h9>Precio:</h9></label>
        <label class= "etiquetaComprar" ><h10>Comprar</h10></label>
      </div>
      <label class= "nombreGame"></label>
      <label class= "price"></label>
      <img class ="carrito" src={Carrito} alt="A Carrito"/>
    </article>
    </div>

</article>

*/

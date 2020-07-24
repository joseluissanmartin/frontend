import React from 'react';


export default function ArticleRegistro(){
  return(
    <article className="formulario">
    <form>
      <div className ="marco">
      <h6 className="nombreUsuario">Nombre de usuario</h6>
      <div className="nombreRegistro">
      <input type="nombreRegistro" name="nombreRegistro"/>
      </div>
      <h6 className="passUsuario">Contrase&ntilde;a</h6>
      <div>
      <input className="passReg" type="password" name="passRegistro"/>
      </div>
      <h6 className="passUsuario2"> Repite Contrase&ntilde;a</h6>
      <div>
      <input className="passReg2" type="password" name="passRegistro"/>
      </div>
      <h6 className="emailUsuario">Email</h6>
      <div >
      <input className="emailReg"type="email" name="emailReg"/>
      <h6 className="edadlUsuario">Fecha nacimiento</h6>
      <input className="edadUs"type="date" name="edadUs"/>
      <button className="cPerfil">Crear Perfil</button>
      <button className="cancelar">Cancelar</button>
      </div>
      </div>
      </form>
    </ article>
  );
}

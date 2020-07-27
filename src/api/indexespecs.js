export function especs (usuario){

  var url = 'http://localhost:5000/registro'
  var datos = {
  correo: "Busqueda",
  password: "usuario.password",
  sistema_o: usuario.sistema_o,
  procesador: usuario.procesador,
  almacenamiento:usuario.almacenamiento,
  ram:usuario.ram,
  grafica:usuario.grafica,
  age:"21",
  nombre:"Pc",
  fecha:"hoy",
  confirmation:"aceptado"

};

  return fetch( url , {
    method: 'POST',
    body : JSON.stringify( datos ),
    headers: {
      'Content-Type' : 'application/json'
    }
  });
}

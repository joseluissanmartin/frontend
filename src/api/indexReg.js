export function register (usuario){

  var url = 'http://localhost:5000/registro'
  var datos = {
  correo: usuario.correo,
  password: usuario.password,
  fecha:"hoy",
  nombre:"Pc",
  confirmation:usuario.confirmation,
  age: usuario.age
};

  return fetch( url , {
    method: 'POST',
    body : JSON.stringify( datos ),
    headers: {
      'Content-Type' : 'application/json'
    }
  });
}

export function login(usuario){

  var url = 'http://localhost:5000/login'
  var datos = {
  email: usuario.email,
  password: usuario.password,
  nombre:'buena carlos',
  fecha:'hoy'
};

  fetch( url , {
    method: 'POST',
    body : JSON.stringify( datos ),
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}

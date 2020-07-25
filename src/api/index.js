export function login(usuario){

  var url = 'http://localhost:5000/inicio'
  var datos = {
  email: usuario.email,
  password: usuario.password
};

  fetch( url , {
    method: 'POST',
    body : JSON.stringify({ datos }),
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}

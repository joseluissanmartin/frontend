export function login(usuario){

  var url = 'http://localhost:5000/login'
  var datos = {
  correo: usuario.correo,
  password: usuario.password
};

  return fetch( url , {
    method: 'POST',
    body : JSON.stringify( datos ),
    headers: {
      'Content-Type' : 'application/json'
    }
  });
  /*.then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));*/
}

export function getDatos() {
  const token =localStorage.getItem('token');
  return fetch('http://localhost:5000/users/<id>',{
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'Autorization': 'Bearer' + token
    }
  });
}

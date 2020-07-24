export function login(usuario){
  fetch('http://localhost:5000/inicio',{
    method: 'POST',
    header: JSON.stringify({
      correo: usuario.email,
      password: usuario.password
    }),
    headers: {
      'Content- Type':'application/json'
    }
  });
}

const nombre = document.getElementById('nombre');
const boton = document.getElementById('enviar');

boton.addEventListener('click', function () {
  document.getElementById('mensaje').innerHTML = '<h1>Bienvenido ' + nombre.value + '</h1>'
});

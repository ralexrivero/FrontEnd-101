const hamburguesa = document.getElementById('hamburguesa');
const subMenu = document.getElementById('sub-menu-labs');

const boton = document.getElementById('boton-bienvenida');
const principal = document.getElementById('principal')
const inicio = document.getElementById('inicio')
const nombre = document.getElementById('nombre');
const saludo = document.getElementById('usuario');

hamburguesa.addEventListener('click', () => {
  if (subMenu.classList.contains('sub-menu-mostrar')) {
    subMenu.classList.remove('sub-menu-mostrar');
  } else {
    subMenu.classList.add('sub-menu-mostrar');
  }
})

boton.addEventListener('click', () => {
  principal.classList.remove('esconder');
  saludo.innerText = `Hola ${nombre.value}`;
  inicio.classList.add('esconder');
})

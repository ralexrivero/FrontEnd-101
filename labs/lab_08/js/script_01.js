const display = document.getElementById('display'); /* variable para el display */
const botones = document.querySelectorAll('button'); /* arreglo con todos los botones */
const temaBoton = document.getElementById('tema');

function cambiarTema() {
  const body = document.body;
  const tema = 'light';

  if (body.classList.contains(tema)) {
    /* borrar la clase light*/
    body.classList.remove(tema);
  } else {
    body.classList.add(tema);
  }
}

temaBoton.addEventListener('click', () => {
  cambiarTema();
});

/* funcion para enviar un numero al display */
function enviarNumero(valor) {
  display.innerHTML = valor;
}

/* numeros */

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    enviarNumero(boton.value);
  })
});

const display = document.getElementById('display'); /* variable para el display */
const botones = document.querySelectorAll('button'); /* arreglo con todos los botones */

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

const valor = Number('3');
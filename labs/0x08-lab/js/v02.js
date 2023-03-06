const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

// funcion para envair un numero al display
function enviarNumero(valor) {
  // enviar el valor al display
  display.innerHTML = valor;
}

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    enviarNumero(boton.value);
  });
});

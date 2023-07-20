const display = document.getElementById('display'); /* variable para el display */
const botones = document.querySelectorAll('button'); /* arreglo con todos los botones */
const temaBoton = document.getElementById('tema');

/* cambio de tema */
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

// Funciones

/* funcion para enviar un numero al display */
function enviarNumero(valor) {
  // envia el valor al display
  const displayValor = display.textContent;
  if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor; // concatenar valores
  }
}

function borrarTodo() {
  display.textContent = '0';
}

function agregarDecimal() {
  display.textContent += '.'; // concatenar . al final
}

/* numeros */

botones.forEach((boton) => {
  if (boton.classList.contains('numeros')) {
    boton.addEventListener('click', () => {
      enviarNumero(boton.value);
    })
  } else if (boton.classList.contains('decimal')) {
    boton.addEventListener('click', () => {
      agregarDecimal();
    })
  } else if (boton.classList.contains('borrar')) {
    boton.addEventListener('click', () => {
      borrarTodo(); // llamar a la funcion
    })
  }
});

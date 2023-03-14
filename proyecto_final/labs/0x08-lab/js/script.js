const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

// funcion para envair un numero al display
function enviarNumero(valor) {
  // enviar el valor al display
  const displayValor = display.textContent;
  if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor;
  }
}

function agregarDecimal() {
  display.textContent += '.';
}

function borrarTodo() {
  display.textContent = '0';
}

botones.forEach((boton) => {
  if (boton.classList.contains('numeros')) {
    boton.addEventListener('click', () => {
      enviarNumero(boton.value);
    });
  } else if (boton.classList.contains('decimal')) {
    boton.addEventListener('click', () => {
      agregarDecimal();
    });
  } else if (boton.classList.contains('borrar')) {
    boton.addEventListener('click', () => {
      borrarTodo();
    });
  }
});


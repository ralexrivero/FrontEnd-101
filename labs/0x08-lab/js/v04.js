/**
 * Calculadora basica
 * Numeros, decimales y operaciones aritmeticas basicas
 */

/********************************************************
 * variables
*********************************************************/
// documentos del DOM
const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

// variables que cambian a lo largo de la ejecucion
let primerTermino = 0;
let operadorIngresado = '';
let banderaTerminoSiguiente = false; // indicar si debe espera el siguiente termino

/**
 * Operaciones = cada miembro del objeto llama a una funcion anonima
 */
const operaciones = {
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b
};

/********************************************************
 * event listener
*********************************************************/

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
  } else if (boton.classList.contains('operadores')) {
    boton.addEventListener('click', () => {
      usarOperador(boton.value);
    })
  } else if (boton.classList.contains('signo-igual')) {
    boton.addEventListener('click', () => {
      resultado();
    })
  }
});

/********************************************************
 * funciones
*********************************************************/
/**
 * envia numeros al display
 * @param valor - valor recibido desde los botones
 */
function enviarNumero(valor) {
  // enviar el valor al display
  const displayValor = display.textContent;
  if (banderaTerminoSiguiente === true) {
    display.textContent = valor;
    banderaTerminoSiguiente = false;
  } else if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor;
  }
}

/**
 * agregar un punto decimal
 * @returns nada si hay un operador presionado o si ya tiene un punto decimal
 */
function agregarDecimal() {
  if (banderaTerminoSiguiente === true) {
    return
  }

  if (display.textContent.includes('.')) {
    return
  } else {
    display.textContent += '.';
  }
}

/**
 * resltuado - muestra el resultado en pantalla
 */
function resultado() {
  console.log('=');
  const valorActual = Number(display.textContent);
  const resultadoFinal = operaciones[operadorIngresado](primerTermino, valorActual);
  display.textContent = resultadoFinal;
  primerTermino = resultadoFinal;
  banderaTerminoSiguiente = true;
}

/**
 * guardar el valor actual en una variable, marcar que se puede ingresar un nuevo numero y guardar el operador
 * @param operador - recibe el oeprador ingresado desde los botones
 */
function usarOperador(operador) {
  const valorActual = Number(display.textContent); // convierto el valor actual del display en numero
  if (!primerTermino) {
    primerTermino = valorActual;
  } else {
    console.log(`valor actual: ${valorActual}`)
  }

  banderaTerminoSiguiente = true; // listo para el siguiente valor
  operadorIngresado = operador;
  console.log(`primerValor: ${primerTermino}`);
  console.log(`operador: ${operadorIngresado}`);
}

/**
 * borrar el display y los valores de las variables
 */
function borrarTodo() {
  display.textContent = '0';
  primerTermino = 0;
  operadorIngresado = '';
  banderaTerminoSiguiente = false;
}


/*********************************
 * variables
**********************************/
// elementos del DOM
const display = document.getElementById('display'); /* variable para el display */
const botones = document.querySelectorAll('button'); /* arreglo con todos los botones */
const temaBoton = document.getElementById('tema');

// variables para la ejecucion

let primerTermino = 0;
let operadorIngresado = '';
let bandera = false; // indicar si estoy esperando otro termino o no

/**
 * operaciones = cada miembro del objeto llama a una funcion anonima
 * 7 + 8 = 15
 * primerTermino = 7
 * operador = +
 * 8
 * primerTermino operador 8
 * 7 + 8
 * 15
 * primerTermino = 15
 * 7 + 8 + 9
 */

const operaciones = {
  // un objeto tienen un par de claves y valores que se accede a su valor por su clave
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

/*********************************
 * Funciones
**********************************/

function cambiarTema() {
  /* cambio de tema */
  const body = document.body;
  const tema = 'light';

  if (body.classList.contains(tema)) {
    /* borrar la clase light*/
    body.classList.remove(tema);
  } else {
    body.classList.add(tema);
  }
}

function enviarNumero(valor) {
  // envia el valor de un numero al display
  const displayValor = display.textContent;
  if (bandera === true) {
    display.textContent = valor;
    bandera = false;
  } else if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor; // concatenar valores
  }
}

function borrarTodo() {
  display.textContent = '0';
  primerTermino = 0;
  operadorIngresado = '';
  bandera = false;
}

function agregarDecimal() {
  if (bandera === true) {
    return // retornar el control al quien lo llamo, osea no hace nada
  }

  if (display.textContent.includes('.')) {
    return
  } else {
    display.textContent += '.'; // concatenar . al final
  }
}

function usarOperador(operador) {
  const valorActual = Number(display.textContent); // convierto el texto del display a numero
  if (!primerTermino) { // el primer termino esta vacio '!' significa not o negacion
    primerTermino = valorActual;
  } else {
    console.log(`valor actual: ${ valorActual }`);
  }

  bandera = true; // listo para el siguiente valor, el primer termino ya lo tengo
  operadorIngresado = operador;
  console.log(`primer valor: ${primerTermino}`);
  console.log(`operador: ${operadorIngresado}`);
}

function resultado() {
  console.log('=');
  const valorActual = Number(display.textContent);
  const resultadoFinal = operaciones[operadorIngresado](primerTermino, valorActual);
  console.log(resultadoFinal);
  primerTermino = resultadoFinal;
  bandera = true;
}

/*********************************
 * Event Listener
**********************************/

temaBoton.addEventListener('click', () => {
  // ejecuta el cambio de tema grafico
  cambiarTema();
});

botones.forEach((boton) => {
  // ejecutar funciones segun cada boton
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

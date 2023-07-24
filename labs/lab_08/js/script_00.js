const display = document.getElementById('display'); /* variable para el display */
const numeros = document.getElementsByClassName('numeros'); /*un arreglo para el teclado numerico */
const botonDecimal = document.getElementsByClassName('decimal'); /* un arreglo de un elemento */
const operadores = document.getElementsByClassName('operadores');
const botonBorrar = document.getElementById('borrar');
const botonIgual = document.getElementsByClassName('signo-igual');

/* funcion para enviar un numero al display */
function enviarNumero(valor) {
  display.innerHTML = valor;
}


/* numeros */
/* 7 */
numeros[0].addEventListener('click', function () {
  enviarNumero(numeros[0].value)
});

/* 8 */
numeros[1].addEventListener('click', function () {
  enviarNumero(numeros[1].value)
});

/* 9 */
numeros[2].addEventListener('click', function () {
  enviarNumero(numeros[2].value)
});

/* 4 */
numeros[3].addEventListener('click', function () {
  enviarNumero(numeros[3].value)
});

/* 5 */
numeros[4].addEventListener('click', function () {
  enviarNumero(numeros[4].value)
});

/* 6 */
numeros[5].addEventListener('click', function () {
  enviarNumero(numeros[5].value)
});

/* 1 */
numeros[6].addEventListener('click', function () {
  enviarNumero(numeros[6].value)
});

/* 2 */
numeros[7].addEventListener('click', function () {
  enviarNumero(numeros[7].value)
});

/* 3 */
numeros[8].addEventListener('click', function () {
  enviarNumero(numeros[8].value)
});

/* 0 */
numeros[9].addEventListener('click', function () {
  enviarNumero(numeros[9].value)
});

/* borrar */

botonBorrar.addEventListener('click', function () {
  enviarNumero(0)
});

/* operadores aritmeticos */
/* definiendo una arrow function o funcion anonima */
/* adicion */
operadores[0].addEventListener('click', () => {
  enviarNumero('&plus;');
});

/* resta */
operadores[1].addEventListener('click', () => {
  enviarNumero('&minus;');
});

/* multiplicar */
operadores[2].addEventListener('click', () => {
  enviarNumero('&times;');
});

/* dividir */
operadores[3].addEventListener('click', () => {
  enviarNumero('&divide;');
});

/* igual */
botonIgual[0].addEventListener('click', () => {
  enviarNumero('&equals;')
})

/* decimal */

botonDecimal[0].addEventListener('click', () => {
  enviarNumero('&period;');
})

/* este script hace que cada boton en un evento click llame a la funcion enviarNumero() */

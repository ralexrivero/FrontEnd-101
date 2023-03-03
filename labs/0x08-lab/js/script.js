const display = document.getElementById('display');
const numeros = document.getElementsByClassName('numeros');
const botonBorrar = document.getElementById('borrar');
const operadores = document.getElementsByClassName('operadores');
const botonIgual = document.getElementsByClassName('signo-igual');
const botonDecimal = document.getElementsByClassName('decimal');

// funcion para envair un numero al display
function enviarNumero(valor) {
  // enviar el valor al display
  display.innerHTML = valor;
}

/**********************************************************
 * numeros
**********************************************************/

// numero 7
numeros[0].addEventListener('click', function () {
  enviarNumero(numeros[0].value);
});

// numero 8
numeros[1].addEventListener('click', function () {
  enviarNumero(numeros[1].value);
});

// numero 9
numeros[2].addEventListener('click', function () {
  enviarNumero(numeros[2].value);
});

// numero 4
numeros[3].addEventListener('click', function () {
  enviarNumero(numeros[3].value);
});

// numero 5
numeros[4].addEventListener('click', function () {
  enviarNumero(numeros[4].value);
});

// numero 6
numeros[5].addEventListener('click', function () {
  enviarNumero(numeros[5].value);
});

// numero 1
numeros[6].addEventListener('click', function () {
  enviarNumero(numeros[6].value);
});

// numero 2
numeros[7].addEventListener('click', function () {
  enviarNumero(numeros[7].value);
});

// numero 3
numeros[8].addEventListener('click', function () {
  enviarNumero(numeros[8].value);
});

// numero 0
numeros[9].addEventListener('click', function () {
  enviarNumero(numeros[9].value);
});


/**********************************************************
 * borrar
**********************************************************/

// boton de borrar

botonBorrar.addEventListener('click', function () {
  enviarNumero(0);
});

/**********************************************************
 * operadores aritmeticos
**********************************************************/

operadores[0].addEventListener('click', () => {
  enviarNumero('&plus;');
});

operadores[1].addEventListener('click', () => {
  enviarNumero('&minus;');
});

operadores[2].addEventListener('click', () => {
  enviarNumero('&times;');
});

operadores[3].addEventListener('click', () => {
  enviarNumero('&divide;');
});

/**********************************************************
 * signo de igual
**********************************************************/
botonIgual[0].addEventListener('click', () => {
  enviarNumero('&equals;')
});


/**********************************************************
 * decimal
**********************************************************/

botonDecimal[0].addEventListener('click', () => {
  enviarNumero('&period;')
});

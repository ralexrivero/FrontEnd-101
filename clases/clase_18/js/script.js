/**
 * Comentarios de multiples lineas
 */

// comentario de una sola linea

/**
 * Sintaxis básica de JavaScript
 */

// variables, tipos de datos y operadores

// variables

// var, let y const
// var es de alcance global y no la utilizamos

// let y const son la forma de declarar una variable

// declaro con let y con = asigno y reasigno un valor
let total;
total = 18;
total = 24;

// declaro y asigno en el momento con const y no se puede cambiar
const precio = 50.8;


let nombre = 'Ronald';
let apellido = "Rivero";
let edad = 43;
let email = 'ralexrivero@gmail.com';

// tipo de datos
// numero
const numero = 120;
const decimal = 18.5;

// texto o string
const texto = 'Hola';

// booleanos (verdadero o falso)
const mayor = true;
const menor = false;

// operadores
const a = 10;
const b = 15;

let resultado;

resultado = a + b;
console.log(resultado)

resultado = a - b;
console.log(resultado)

resultado = a * b;
console.log(resultado)

resultado = a / 2;
console.log(resultado)

console.log('Hola');
console.log(nombre)

// document.write("<h1>Hola Mundo!</h1>") // no se usa habitualmente


/**
 * modificación del DOM
 * DOM: Document Object Model
 * Es una representación del contenido de un documento HTML
 */

// métodos
// getElementById()
// querySelector()
// getElementsByClassName()
// getElementsByTagName()

const card = document.getElementById('card');
card.innerHTML = '<p class="parrafo">Texto generado desde JavaScript</p>';

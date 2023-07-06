/**
 * operadorse aritmeticos
 */

const a = 8;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

/**
 * operador de asignacion
 * = asignacion
 */

const c = 18;

/**
 * operadores logicos
 * < menor que
 * <= menor o igual
 * > mayor que
 * >= mayor o igual
 * == comparar valores
 * === compara valores y tipos
 * && AND combinar operaciones
 * || OR or (o)
 */

const w = '5';
const x = 5;
const y = 10;
const z = 15;

console.log(x < y) // verdadero (true)
console.log(x === y) // falso (false)
console.log(w == x) // verdadero (compara valores)
console.log(w === x) // falso (compara valor y tipo)
console.log(x < y && y < z) // verdadero
console.log(5 <= x);
console.log(18 >= x);
console.log(x < y || x > y) // verdadero

/**
 * Condicional
 * if/else
 *
 * if (condicion) {
 * condicion verdedera
 * } else {
 *  cuando no se cumple}
 */

let edad; // undefined hasta que lo inicialice o le de valor
let tienePermiso = false; // booleano

edad = 19;

if (edad >= 18 || tienePermiso === true) {
  console.log('Puede ingresar');
} else {
  console.log('No puede ingresar');
}

let puntuacion; // puntuacion del alumno de 0 a 100
let calificacion; // A, B, C, D


puntuacion = 69;

if (puntuacion >= 95) {
  calificacion = 'A';
} else if (puntuacion >= 85) {
  calificacion = 'B';
} else if (puntuacion >= 70) {
  calificacion = 'C';
} else {
  calificacion = 'D';
}

console.log('La calificacion es ' + calificacion)

/**
 * Bucle for
 * es una forma de repetir una serie de instrucciones un numero especifico de veces
 * for (inicializacion; condicion; pasos) {
 * codigo a repetir}
 */


for (let i = 0; i <= 6; i += 2) {
  console.log('valor de i: ' + i);
}

const limite = 3;

for (let i = 2; i <= limite; i++) {
  console.log('repetir este codigo ' + i);
}

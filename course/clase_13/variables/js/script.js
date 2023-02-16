/*
  declarar una variable con la palabra reservada var
  primero asigno un valor con el operarod de asignacion =
  recupero el valor por referencia usando el nombre de la variable
*/

var primer_nombre = 'Ada';

console.log(primer_nombre);

/**
 * var es de alcance global
 * generar problemas
 */

/**
 * let y const
 * let: tienen un alcance de bloque
 * const: no puede ser reasignado su valor, y tienen que ser declarado y asignado su valor
 */

/* asigno un valor */
let a = 1;
console.log(a);

/* reasigno el valor */
a = 2;
console.log(a);

/* creo y asigno con const */
const usuario = 'ralex';

console.log(usuario);

/* reasignar el valor no es posible
usuario = 'ronald_alexander_2814'
*/

/****************
 * tipado debil
 */

const user = 'ronald'; // string o cadena

/**
 * operador typeof
*/
console.log(typeof user);

const cantidad = 7514;
console.log(typeof cantidad);


/**
 * Tipos de datos primitivos
 */

const cadena = 'Hola'; // string
const numero = 3.14; // number
const booleano = true; // boolean
const nulo = null; // null, ausencia de valor
let indefinido; // undefined

let x;
console.log(x);
x = 8;
console.log(x);
console.log(typeof x)

x = 'hola que tal?';
console.log(x);
console.log(typeof x)

/**
 * aritmeticas
 * +
 * -
 * *
 * /
 * %
 * ++
 * --
 */

let b = 1;
let c = 2;
let d = 0;

d = b + c;
console.log(d);

d = c * b;
console.log(d);


/*
  declarar una variable con la palabra reservada var
  primero asigno un valor con el operador de asignación =
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
 * tipado débil
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
 * aritméticas
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

let num_1 = 10;
console.log(num_1);

num_1++; /* num_1 = num_1 + 1*/
console.log(num_1);

console.log(typeof num_1);

num_1 = 28;

/**
 * asignación
 * = asignación
 * += adición
 * -= sustracción
 * *= multiplicación
 * /= división
 * %= modulo
 */
num_1 += 12; /*num_1 = num_1 + 12 resultado: 40 */
console.log(num_1);

num_1 /= 10;
console.log(num_1);

/**
 * == igual a. Evitemos usarla
 * === igual y del mismo tipo, es la forma segura de comparar
 * != distinto
 * !== distinto de o del mismo tipo
 * > mayor que
 * < menor que
 * >= mayor o igual que
 * <= menor o igual que
 */

const num_2 = 10; /* number */
const num_3 = 5;
const texto_1 = '10'; /* string */

console.log(num_2 == num_3); // valor de a igual al valor de b? false
console.log(num_2 === num_3); // valor de a y tipo de igual al tipo y valor de b? false

console.log(num_2 == texto_1); // valor de num_2 igual a texto_1? true
console.log(num_2 === texto_1); // valor y tipo de num_2 igual a texto_1? falso

console.log(num_2 > num_3); // true

// mensaje de bienvenida
document.write('Para ver la ejecución del script, abre la consola habilitando las herramientas de desarrollo o "Developers Tools"');

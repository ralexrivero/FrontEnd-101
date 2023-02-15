# JavaScript

```javascript
     ██  █████  ██    ██  █████  ███████  ██████ ██████  ██ ██████  ████████
     ██ ██   ██ ██    ██ ██   ██ ██      ██      ██   ██ ██ ██   ██    ██
     ██ ███████ ██    ██ ███████ ███████ ██      ██████  ██ ██████     ██
██   ██ ██   ██  ██  ██  ██   ██      ██ ██      ██   ██ ██ ██         ██
 █████  ██   ██   ████   ██   ██ ███████  ██████ ██   ██ ██ ██         ██
```

## Tabla de contenidos

- [Introducción](#introducción)
- [Variables](#variables)
- [Alcance de las variables](#alcance-de-las-variables)
- [var vs let vs const](#var-vs-let-vs-const)
  - [var](#var)
  - [let](#let)
  - [const](#const)
- [Tipos de datos](#tipos-de-datos)
- [Operador typeof](#operador-typeof)
- [Operadores](#operadores)
  - [Operadores aritméticos](#operadores-aritméticos)
  - [Operadores de asignación](#operadores-de-asignación)
  - [Operadores de comparación](#operadores-de-comparación)
  - [Operadores lógicos](#operadores-lógicos)
  - [Operadores de cadena](#operadores-de-cadena)
  - [Operador ternario](#operador-ternario)
  - [Operador de coma](#operador-de-coma)
  - [Operador de punto](#operador-de-punto)
- [Condicionales](#condicionales)
  - [if...else](#ifelse)
  - [switch](#switch)
- [Bucles](#bucles)
  - [for](#for)
  - [while](#while)
  - [do...while](#dowhile)

## Introducción

**JavaScript** es un lenguaje de programación que se ejecuta en el navegador. Es el lenguaje que se utiliza para darle interactividad a las páginas web. **JavaScript** es un lenguaje de programación que se ejecuta en el navegador. Es el lenguaje que se utiliza para darle interactividad a las páginas web.

## Variables

Las *variables* son una característica clave de los lenguajes de programación que les permite almacenar y manipular información para su uso posterior. En **JavaScript**, las *variables* se declaran con la palabra clave `var`.

```javascript
var nombre = "Ada";
```

En el ejemplo anterior, declaramos una variable llamada `nombre` y le asignamos el valor `"Ada"`.

Podemos acceder al valor de la variable referenciándola por su nombre.

```javascript
console.log(nombre); // Ada
```

## Alcance de las variables

El alcance de las variables es el ámbito en el que se pueden utilizar. Las variables declaradas dentro de una función no pueden ser utilizadas fuera de la función.

```javascript
function saludar() {
  var mensaje = "Hola";
  console.log(mensaje);
}

saludar(); // Hola
console.log(mensaje); // ReferenceError: mensaje is not defined
```

## var vs let vs const

### var

La palabra reservada `var` se utiliza para declarar variables globales.

```javascript
var nombre = "Juan";
```

### let

La palabra reservada `let` se utiliza para declarar variables con un alcance de bloque.

```javascript
let nombre = "Juan";
```

### const

La palabra reservada `const` se utiliza para declarar constantes y no pueden ser reasignadas.

```javascript
const PI = 3.1416;
```

La principal diferencia entre `var`, `let` y `const` radica en el *alcance* y la *asignación* de los valores. `var` tiene un alcance global, lo que significa que la variable es accesible en todo el código, mientras que `let` y `const` tienen un alcance de *bloque*, lo que significa que la variable solo es accesible dentro del *bloque* en el que se declara.

Además, `let` permite la reasignación de valores, mientras que `const` no lo permite. Es decir, una vez que se ha asignado un valor a una variable con la palabra clave `const`, no se puede cambiar.

Como `var` tiene alcance global puede causar problemas inesperados y difíciles de rastrear en el código. Además, la redeclaración de variables con la palabra clave `var` puede sobrescribir los valores existentes y crear errores difíciles de encontrar.

De ahora en mas utilizaremos `let` y `const` en lugar de `var`.

## Tipos de datos

**JavaScript** es un lenguaje de *tipado débil*, lo que significa que no es necesario declarar explícitamente el tipo de datos de una variable.

```javascript
const  nombre = "Ada";
const  edad = 19;
const  esEstudiante = true;
```

En el ejemplo anterior, `nombre` es una variable de tipo `string`, `edad` es una variable de tipo `number` y `esEstudiante` es una variable de tipo `boolean`.

### Tipos de datos primitivos

- `string`: cadena de caracteres o una cadena vacía, por ejemplo: `"Hola"`, `"Adiós"`, `""`
- `number`: un número entero o decimal, por ejemplo: `17` o `24.31`, `-911`
- `boolean`: un valor lógico que puede ser `true` o `false`
- `null`: un valor especial que indica la ausencia de un valor
- `undefined`: un valor especial que indica que una variable no ha sido inicializada, por ejemplo: `let nombre;`
- `symbol`: un tipo de dato primitivo que es único e inmutable, por ejemplo: `Symbol("foo")`

### Tipos de datos no primitivos

- `object`: colecciones de *propiedades* y *valores*, por ejemplo: `{ nombre: "Juan", edad: 25 }`
- `array`: una lista ordenada de valores, por ejemplo: `[1, 2, 3, 4, 5]`
- `function`: bloques de código reutilizable que pueden ser llamados, por ejemplo: `function sumar(a, b) { return a + b; }`
- `date`: representan fechas y horas, por ejemplo: `new Date()`
- `regexp`: las expresiones regulares son patrones utilizados para buscar y reemplazar texto, por ejemplo: `/hola/`

## Operador typeof

El operador `typeof` devuelve el tipo de una variable.

```javascript
typeof "Ada"; // "string"
typeof 19; // "number"
typeof true; // "boolean"
typeof null; // "object"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
```

## Operadores

Los operadores son símbolos que le indican al intérprete de **JavaScript** qué debe realizar una operación *aritmética*, de *comparación* o *lógica* y qué valor debe devolver.

### Operadores aritméticos

Los operadores aritméticos se utilizan para realizar operaciones matemáticas comunes.

- `+`: suma.
- `-`: resta.
- `*`: multiplicación.
- `/`: división.
- `%`: módulo (resto de la división).
- `++`: incremento.
- `--`: decremento.

```javascript
let  a = 10;
let  b = 5;

a + b; // 15
a - b; // 5
a * b; // 50
a / b; // 2
a % b; // 0
a++; // 11
a--; // 10
```

### Operadores de asignación

Los operadores de asignación se utilizan para asignar valores a variables.

- `=`: asignación.
- `+=`: asignación de adición.
- `-=`: asignación de sustracción.
- `*=`: asignación de multiplicación.
- `/=`: asignación de división.
- `%=`: asignación de módulo.

```javascript
let a = 10;
let b = 5;

a = b; // 5
a += b; // 10
a -= b; // 5
a *= b; // 25
a /= b; // 5
a %= b; // 0
```

### Operadores de comparación

Los operadores de comparación se utilizan para comparar dos valores.

- `==`: igual a.
- `===`: igual a y del mismo tipo.
- `!=`: distinto de.
- `!==`: distinto de o no del mismo tipo.
- `>`: mayor que.
- `<`: menor que.
- `>=`: mayor o igual que.
- `<=`: menor o igual que.

```javascript
const a = 10;
const b = 5;

a == b; // false
a === b; // false
a != b; // true
a !== b; // true
a > b; // true
a < b; // false
a >= b; // true
a <= b; // false
```

### Operadores lógicos

Los operadores lógicos se utilizan para combinar expresiones lógicas.

- `&&`: operador lógico AND.
- `||`: operador lógico OR.
- `!`: operador lógico NOT.

```javascript
const  a = 10;
const  b = 5;

a > 5 && b < 10; // true
a > 5 || b < 10; // true
!(a > 5); // false
```

### Operadores de cadena

Los operadores de cadena se utilizan para concatenar (unir) cadenas de caracteres.

- `+`: concatenación.

```javascript
const  nombre = "Ada";
const  apellido = "Lovelace";

nombre + " " + apellido; // "Ada Lovelace"
```

### Operador ternario

El operador ternario es un operador condicional que se utiliza para simplificar la escritura de sentencias `if...else`.

- `?:`: operador condicional.

```javascript
const  edad = 19;

const  mensaje = edad >= 18 ? "Puedes votar" : "No puedes votar";
```

### Operador de coma

El operador de coma se utiliza para separar múltiples expresiones.

- `,`: operador de coma.

```javascript
const  a = 10, b = 5;
```

### Operador de punto

El operador de punto se utiliza para acceder a las propiedades de un objeto.

- `.`: operador de punto.

```javascript
const  persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  edad: 19
};

persona.nombre; // "Ada"
persona.apellido; // "Lovelace"
persona.edad; // 19
```

## Condicionales

Los condicionales son estructuras de control que nos permiten ejecutar un bloque de código si se cumple una condición.

### if

La estructura `if` ejecuta un bloque de código si se cumple una condición.

```javascript
const  edad = 19;

if (edad >= 18) {
  console.log("Puedes votar");
}
```

### if...else

La estructura `if...else` ejecuta un bloque de código si se cumple una condición y otro bloque de código si no se cumple.

```javascript
const  edad = 19;

if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}
```

### if...else if...else

La estructura `if...else if...else` ejecuta un bloque de código si se cumple una condición, otro bloque de código si se cumple otra condición y otro bloque de código si no se cumple ninguna condición.

```javascript
const  edad = 19;

if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad >= 18 && edad < 65) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres adulto mayor");
}
```

### switch

La estructura `switch` ejecuta un bloque de código dependiendo del valor de una variable.

```javascript
const  dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miércoles":
    console.log("Hoy es miércoles");
    break;
  case "jueves":
    console.log("Hoy es jueves");
    break;
  case "viernes":
    console.log("Hoy es viernes");
    break;
  case "sábado":
    console.log("Hoy es sábado");
    break;
  case "domingo":
    console.log("Hoy es domingo");
    break;
  default:
    console.log("No es un día válido");
}
```

## Bucles

Los *bucles* o *ciclos* son **estructuras de control** que nos permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición.

### while

La estructura `while` ejecuta un bloque de código mientras se cumpla una condición.

```javascript
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

### do...while

La estructura `do...while` ejecuta un bloque de código al menos una vez y mientras se cumpla una condición.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

### for

La estructura `for` ejecuta un bloque de código mientras se cumpla una condición.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### for...in

La estructura `for...in` ejecuta un bloque de código para cada propiedad de un objeto.

```javascript
const  persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 19
};

for (const propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
```

### for...of

La estructura `for...of` ejecuta un bloque de código para cada elemento de un objeto iterable.

```javascript
const numeros = [1, 2, 3, 4, 5];

for (const  numero of numeros) {
  console.log(numero);
}
```

## Strings


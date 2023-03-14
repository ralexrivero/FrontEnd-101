console.log('hola');

const curso = 'Curso de Frontend';
const cantidad = 13;
const activo = true;
const finalizado = null;
let proyectos;

console.log(typeof(curso));

let nombre; // declaro la variable, sin darle valor

nombre = 'Ronald'; // le doy un valor
nombre = 'Jose'; // cambio el valor de la variable
let apellido = 'Raul';
let nacionalidad = 'Uruguaya';
let edad = 15;

let infoPersonal = nombre + ' ' + apellido;
console.log(infoPersonal);
infoPersonal = `<p>${nombre} ${apellido} es de nacionalidad: ${nacionalidad} y tienen ${edad} años<p>`
document.write(infoPersonal);

console.log(`Hola ${nombre}, bienvenido al sitio!`);


console.log('Hola ' + nombre + ' bienvenido al sitio!'); // concatenar con el operador +
document.write(`Hola ${nombre}, bienvenido al sitio!`); // backticks, inperpolacion de texto

console.log(nombre);

document.write(`<p>${nombre}</p>`);


console.log(typeof edad);

diferencia = 18 - edad;

console.log(diferencia); // 3

let mayorDeEdad = edad >= 18;
console.log(mayorDeEdad);

const arregloInfo = infoPersonal.split(' ');
console.log(arregloInfo);

const arreglo = [1, 5, 8, 3, 2, 19]
console.log(arreglo[0]);
console.log(arreglo[4]);

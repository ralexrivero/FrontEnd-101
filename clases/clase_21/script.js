/**
 * arreglo o array: estructura de datos
 */

let numero = 98;
let numeros = [1, 2, 3, 4, 5, 6];
console.log(numero);
console.log(numeros);

for (let i = 0; i < 6; i++) {
  console.log(numeros[i]);
}


let frutas = ['manzana', 'banana', 'naranja', 'pera', 'kiwi', 'sandia'];

/** metodos de array */
/** metodo del arreglo */
/** push: agregar un valor */
frutas.push('arandanos');
frutas.push('frutilla');
frutas.push('mandarina');

/** acceso a un elemento por su indice */
console.log(frutas[1]);

for (let j = 0; j < frutas.length; j++) {
  console.log(frutas[j]);
}

let nombres = ['Juan', 'Raul', 'Esteban'];
nombres.pop();
console.log(nombres);

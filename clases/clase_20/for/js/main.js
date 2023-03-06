// Ciclo for
// (inicializacion; condicion; incremento)

for (let i = 0; i < 5; i++) {
  document.write(`<p>El valor de i: ${i}</p>`)
};


// for in

// objeto persona
const persona = {
  nombre: 'Ronald',
  apellido: 'Rivero',
  edad: 42
};

for (let propiedad in persona) {
  console.log(propiedad + "-->" + persona[propiedad]);
};


// forEach

const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach( (numero) => {
  console.log(`Numero: ${numero}`);
});

const alumnos = ['Juan', 'Maria', 'John', 'Alfred'];

alumnos.forEach( (alumno) => {
  console.log(`Nombre: ${alumno}`);
});

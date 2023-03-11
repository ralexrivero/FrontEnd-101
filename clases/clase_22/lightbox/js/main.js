/**
 * Galeria estilo lightbox
 * mostrar una imagen en un fondo transparente oscuro que ocupe toda la pantalla
 * ocultar las barras de scroll
 * mostrar la imagen siempre en el centro de la pantalla
 * al hacer clic abrir una imagen, si se cliquea la imagen grande, se cierra
 */

const miniaturas = document.getElementsByClassName('mini-img'); // cargar todas la miniaturas
const maxiImagen = document.getElementById('maxi-img'); // cargar la imagen oculta
const pantallaNegra = document.getElementById('maxi'); // pantall negra oscura donde va la imagen
const body = document.getElementsByTagName('body'); // body


/**
 * recorrer todas las miniaturas y agragar un evento de escucha 'click'
 */
for (let i = 0; i < miniaturas.length; i++) {
  const fuente = miniaturas[i].src.replace(/s.jpg/g, 'm.jpg'); // regexp para cambiar la s por la m en la src de las etiquetas <img src="">
  miniaturas[i].addEventListener('click', () => {
    maxiImagen.src = fuente; // cambia la fuente de imagen grande, oculta por una grande
    mostrar(); // llama la funcion mostrar
  });
}


/**
 * elimina la clase oculto, el elemento pantallNegra se ve,
 * el body pierde las barras de desplazamiento y la capacidad de scroll
 * Se mide la altura que tiene la posicion de la venta segun el scroll realizado
 * ese valor se agrega a la posicion top para que el elemento se muestre al centro de la ventana
 */
function mostrar () {
  pantallaNegra.classList.remove('oculto');
  body[0].style.overflow = 'hidden';
  const positionY = window.scrollY - 5;
  pantallaNegra.style.top = `${positionY}px`;
}

/**
 * En la imagen grande, cuando se hace click se oculta el div
 * remueve la imagen grande (no hay una imagen cargada que no se muestra)
 * devulve la capacidad de scroll y las barras si son necesarias
 */
pantallaNegra.addEventListener('click', () => {
  pantallaNegra.classList.add('oculto');
  body[0].style.overflow = 'auto';
  maxiImagen.src = '';
});

const miniaturas = document.getElementsByClassName('mini-img');
const maxiImagen = document.getElementById('maxi-img');
const pantallaNegra = document.getElementById('maxi');
const body = document.getElementsByTagName('body');

for (let i = 0; i < miniaturas.length; i++) {
  const fuente = miniaturas[i].src.replace(/s.jpg/g, 'm.jpg');
  miniaturas[i].addEventListener('click', () => {
    maxiImagen.src = fuente;
    mostrar();
  });
}

function mostrar () {
  pantallaNegra.classList.remove('oculto');
  body[0].style.overflow = 'hidden';
  const positionY = window.scrollY - 5;
  pantallaNegra.style.top = `${positionY}px`;
}

pantallaNegra.addEventListener('click', () => {
  pantallaNegra.classList.add('oculto');
  body[0].style.overflow = 'auto';
  maxiImagen.src = '';
});

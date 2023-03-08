const hamburguesa = document.getElementById('hamburguesa');
const subMenu = document.getElementById('sub-menu-labs');

hamburguesa.addEventListener('click', () => {
  if (subMenu.classList.contains('sub-menu-mostrar')) {
    subMenu.classList.remove('sub-menu-mostrar');
  } else {
    subMenu.classList.add('sub-menu-mostrar');
  }
})

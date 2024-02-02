var navList = document.querySelector('.nav__list');

function toggleMenu() {
    navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'flex' : 'none';
}

navList.addEventListener('click', toggleMenu);
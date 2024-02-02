var navList = document.querySelector('.nav__list');
var menu = document.querySelector('.nav__menu');
var burgermenu = document.querySelector('.burgermenu');

function toggleMenu() {
    navList.classList.toggle('show');
    navList.style.display = (navList.style.display === "flex") ? "none" : "flex";
    navList.style.flexDirection = (navList.style.flexDirection === "column") ? "row" : "column";
    console.log('je clique');
}

menu.addEventListener('click', toggleMenu);


// burgermenu.style.display = (burgermenu.style.display === "block") ? "none" : "block";
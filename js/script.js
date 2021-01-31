AOS.init();

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const toggleIcon = document.querySelector('.nav-toggle i');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleIcon.classList.toggle('fa-times');
});
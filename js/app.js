const ham = document.querySelector('.hamburger');
const hamb = document.querySelectorAll('.hamburger div');
const navList = document.querySelector('header nav')

ham.addEventListener('click', function() {
    hamb.forEach(line => line.classList.toggle('toggler'));
    navList.classList.toggle('show');
});
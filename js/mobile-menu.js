const mobileMenu = document.querySelector('.mobile-menu');
const headernav = document.querySelector('.header__link');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');



const toggleMenu = () => {
    mobileMenu.classList.toggle('active'),
        headernav.classList.toggle('active')
 }; 



menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

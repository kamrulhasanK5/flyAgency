const toggleBar = document.querySelector('.toggle');
const toggleMenu = document.querySelector('.menu');
const nav = document.querySelector('#top-nav');
const mainHeader = document.querySelector('.main-header');
const footerHeader = document.querySelector('.footer-header');
const body = document.querySelector('body');


toggleBar.addEventListener('click', () => {
    toggleBar.classList.toggle('active');
    toggleMenu.classList.toggle('active');

   mainHeader.classList.toggle('body-blur');
   footerHeader.classList.toggle('body-blur');

   //scroll close korar logic body te
   if(toggleMenu.classList.contains('active')){
    body.style.overflow = 'hidden';
   }else{
    body.style.overflow = 'auto';
   }
})




window.onscroll = function (){
    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
}
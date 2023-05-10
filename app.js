const burger = document.querySelector('#burgerbtn');
const menu = document.querySelector('#menubtn');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});
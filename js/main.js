
window.onload = function() {
    // Script for open and close the menu for mobiles
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const links = document.querySelectorAll('nav ul li a');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
        body.classList.toggle('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            nav.classList.remove('no-scroll');
        });
    });
}

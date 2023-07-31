
window.onload = function() {
    // Add sticky class and background to the navbar when scrolling, pageYOffset is deprecated
    window.onscroll = function() {
        var navbar = document.querySelector("nav");
        var sticky = navbar.offsetTop;
        console.log(window.scrollY, sticky)
        if (window.scrollY > 400) {
            navbar.classList.add("sticky");
            navbar.style.background = "#fff";
        } else {
            navbar.classList.remove("sticky");
            navbar.style.background = "none";
        }
    }

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

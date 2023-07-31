
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

    // Add sticky class and background to the navbar when scrolling
    window.onscroll = function() {
        var navbar = document.querySelector("nav");
        if (window.scrollY > 400) {
            navbar.classList.add("sticky");
            navbar.style.background = "#fff";
        } else {
            navbar.classList.remove("sticky");
            navbar.style.background = "none";
        }
    }

    // script for horizontal slider, calculate and render the controls using the class slider__control and active and listen for window resize
    sliderInit = () => {
        const sliderList = document.querySelector('.slider__list');
        const sliderControls = document.querySelector('.slider__controls');
        const sliderItems = document.querySelectorAll('.event');
        const sliderItemWidth = sliderItems[0].offsetWidth;
        const sliderItemsLength = sliderItems.length;
        const sliderListWidth = sliderItemWidth * sliderItemsLength;
        let activeSlide = 0;
        let sliderControlsHTML = '';
    
        sliderList.style.width = `${sliderListWidth}px`;
        
        sliderItems.forEach((item, index) => {
            if (index === 0) {
                sliderControlsHTML += `<button class="slider__control active" data-slide="${index}"></button>`;
            } else {
                sliderControlsHTML += `<button class="slider__control" data-slide="${index}"></button>`;
            }
        });
    
        sliderControls.innerHTML = sliderControlsHTML;
    
        const sliderControlsButtons = document.querySelectorAll('.slider__control');
    
        sliderControlsButtons.forEach(button => {
            button.addEventListener('click', () => {
                sliderControlsButtons.forEach(button => {
                    button.classList.remove('active');
                });
                button.classList.add('active');
                activeSlide = button.dataset.slide;
                sliderList.style.transform = `translateX(-${activeSlide * sliderItemWidth}px)`;
            });
        });
    
        window.addEventListener('resize', () => {
            const sliderItemWidth = sliderItems[0].offsetWidth;
            const sliderListWidth = sliderItemWidth * sliderItemsLength;
            sliderList.style.width = `${sliderListWidth}px`;
            sliderList.style.transform = `translateX(-${activeSlide * sliderItemWidth}px)`;
        });
    }

    const slider = document.querySelector('.slider');
    if (slider) {
        sliderInit();
    }
}

// icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuIconE = document.querySelector('.fa__bars');
let menuIconX = document.querySelector('.fa__x');

menuIcon.onclick = () => {
    menuIconE.classList.toggle('icon__active');
    menuIconX.classList.toggle('icon__active');
    navbar.classList.toggle('active');
}




// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

   
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // acteve section for animation on scroll
            if(offset = sec.offsetTop + 100)
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove navbar wen click navbar links
    navbar.classList.remove('active');
    menuIconX.classList.add('icon__active');
    menuIconE.classList.remove('icon__active');
}


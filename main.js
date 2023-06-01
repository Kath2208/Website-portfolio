


// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};










let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll =() =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');

            });
        };
    });

// =================sticky navbar==========
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);


// =================remove toggle icon==========


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


// =================scroll reveal==========


ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
    

});


ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });

ScrollReveal().reveal('.home-img,.skills-container, .portfolio-box, .contact form', { origin: 'bottom' });


ScrollReveal().reveal('.home-content  h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

ScrollReveal().reveal('.container', { origin: 'bottom' });


// =================typed js==========


const typed = new Typed('.heading-text', {
    strings:['Passionate','Aspiring','Frontend Developer'],

    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

function myFunction() {
    var read = document.getElementById("read");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (read.style.display === "none") {
        read.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
        read.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



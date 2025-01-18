const github = document.getElementById("github");
github.addEventListener('click', function() {
    window.open("https://github.com/abrar-sde", "_blank");
});

const linkedIn = document.getElementById("linkedIn");
linkedIn.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/mohammed-abrar-303460219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
});

const twitter = document.getElementById("twitter");
twitter.addEventListener('click', function() {
    window.open("https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D", "_blank");
});


const github2 = document.getElementById("github2");
github2.addEventListener('click', function() {
    window.open("https://github.com/abrar-sde", "_blank");
});

const linkedIn2 = document.getElementById("linkedIn2");
linkedIn2.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/mohammed-abrar-303460219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
});

const twitter2 = document.getElementById("twitter2");
twitter2.addEventListener('click', function() {
    window.open("https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D", "_blank");
});

const ccnaImage =  document.getElementById('ccnaImage');
ccnaImage.addEventListener('click', function(){
    window.open("https://drive.google.com/file/d/15tekUS-SfzboriWbsavNL6RXU0BNiC7J/view?usp=sharing", "_blank");
});

const cehImage =  document.getElementById('cehImage');
cehImage.addEventListener('click', function(){
    window.open("https://www.udemy.com/certificate/UC-ef7f1175-d94c-497a-bf8c-6f875d86922e/", "_blank");
});

const securityImage =  document.getElementById('securityImage');
securityImage.addEventListener('click', function(){
    window.open("https://www.udemy.com/certificate/UC-ef7f1175-d94c-497a-bf8c-6f875d86922e/", "_blank");
});




let menuIcon = document.querySelector('#menu-icon');                                                    
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // Current scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Section's starting point
        let height = sec.offsetHeight; // Section's height
        let id = sec.getAttribute('id'); // Section's ID

        if (top >= offset && top < offset + height) {
            // Remove 'active' from all links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' to the current link
            document
                .querySelector('header nav a[href*=' + id + ']')
                ?.classList.add('active'); // Use optional chaining to avoid errors
        }
    });

    const footer = document.querySelector('footer'); // Select the footer
if (footer) {
    let footerOffset = footer.offsetTop - 150;
    let footerHeight = footer.offsetHeight;

    if (window.scrollY >= footerOffset && window.scrollY < footerOffset + footerHeight) {
        navlinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('header nav a[href*="footer"]').classList.add('active');
    }
}
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

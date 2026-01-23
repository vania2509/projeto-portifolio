const links = document.querySelectorAll('#menu ul li > a.link');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()});

const target = document.querySelector(link.getAttribute('href'));
const altheader = document.querySelector("header").offsetHeight;
const position = target.offsetTop - altheader - 20;
     
scrollTo({
    top: position,
    behavior: 'smooth'
});
})

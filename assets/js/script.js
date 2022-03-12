
let html = document.querySelector("html");
let themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {

    themeToggle.children[0].classList.toggle('fa-sun');
    themeToggle.children[0].classList.toggle('fa-moon');
    themeToggle.children[0].classList.toggle('effect');
    html.classList.toggle('dark');  

});


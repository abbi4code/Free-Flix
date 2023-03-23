const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 100){
        navbar.classList.add('black-nav');
    } else {
        navbar.classList.remove('black-nav');
    }
    
});
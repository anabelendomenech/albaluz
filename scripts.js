[30/9/24, 9:06:57 p. m.] Clovis: // Lógica para las preguntas frecuentes
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Lógica básica para carrusel
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Velocidad del scroll
    carousel.scrollLeft = scrollLeft - walk;
});

// Lógica del menú móvil
const nav = document.querySelector('.main-nav');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerH
[30/9/24, 9:06:58 p. m.] Clovis: TML = '<div></div><div></div><div></div>';
document.querySelector('.logo').insertAdjacentElement('afterend', hamburger);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


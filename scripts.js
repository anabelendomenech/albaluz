// Lógica para las preguntas frecuentes
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
hamburger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('.logo').insertAdjacentElement('afterend', hamburger);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Desaparición de scroll-indicator al final de la página
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const indicator = document.getElementById('indicator');
        if (entry.isIntersecting) {
            indicator.classList.add('hidden');
        } else {
            indicator.classList.remove('hidden');
        }
    });
};

const footer = document.querySelector('footer');
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(footer);


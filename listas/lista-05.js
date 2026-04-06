const cards = [
    { icon: '🎯', title: 'Estrategia', desc: 'Planificación detallada de cada proyecto' },
    { icon: '✏️', title: 'Diseño', desc: 'Interfaces atractivas y funcionales' },
    { icon: '💻', title: 'Código', desc: 'Desarrollo limpio y escalable' },
    { icon: '🧪', title: 'Testing', desc: 'Validación exhaustiva de calidad' },
    { icon: '🚀', title: 'Lanzamiento', desc: 'Deploy optimizado y monitoreo' },
    { icon: '📈', title: 'Análisis', desc: 'Métricas y mejora continua' }
];

const grid = document.getElementById('staggerGrid');

cards.forEach((card, index) => {
    const div = document.createElement('div');
    div.className = 'stagger-card';
    div.innerHTML = `
        <span class="card-icon">${card.icon}</span>
        <h3 class="card-title">${card.title}</h3>
        <p class="card-desc">${card.desc}</p>
    `;
    
    // Efecto de luz que sigue al ratón
    div.addEventListener('mousemove', (e) => {
        const rect = div.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        div.style.setProperty('--x', `${x}px`);
        div.style.setProperty('--y', `${y}px`);
    });
    
    grid.appendChild(div);
});

// Intersection Observer con stagger
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Retardo escalonado tipo burbuja
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.stagger-card').forEach(card => observer.observe(card));
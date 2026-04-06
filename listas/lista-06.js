const items = [
    { title: 'Investigación', desc: 'Análisis profundo del mercado y competencia' },
    { title: 'Conceptualización', desc: 'Definición de la visión creativa' },
    { title: 'Prototipado', desc: 'Wireframes y mockups interactivos' },
    { title: 'Desarrollo', desc: 'Implementación técnica del proyecto' },
    { title: 'Testing', desc: 'Pruebas de usabilidad y rendimiento' },
    { title: 'Entrega', desc: 'Lanzamiento y documentación final' }
];

const list = document.getElementById('cascadeList');

items.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cascade-item';
    div.innerHTML = `
        <div class="cascade-num">${index + 1}</div>
        <div class="cascade-content">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `;
    list.appendChild(div);
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.cascade-item').forEach(item => observer.observe(item));
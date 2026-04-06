/**
 * LIS-02: Timeline Horizontal con Progreso
 * Scroll horizontal con barra de progreso animada
 */

(function() {
    const container = document.getElementById('timeline');
    const itemsContainer = document.getElementById('timelineItems');
    const progressFill = document.getElementById('progressFill');
    
    const steps = [
        { icon: '💡', title: 'Descubrimiento', desc: 'Analizamos tus necesidades y objetivos de negocio' },
        { icon: '✏️', title: 'Diseño', desc: 'Creamos prototipos visuales y experiencias de usuario' },
        { icon: '💻', title: 'Desarrollo', desc: 'Construimos con código limpio y las mejores prácticas' },
        { icon: '🧪', title: 'Testing', desc: 'Probamos en múltiples dispositivos y navegadores' },
        { icon: '🚀', title: 'Lanzamiento', desc: 'Deploy optimizado y monitoreo continuo' }
    ];
    
    // Generar items
    steps.forEach((step, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-icon">${step.icon}</div>
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-step">Paso 0${index + 1}</div>
                <h3 class="timeline-title">${step.title}</h3>
                <p class="timeline-desc">${step.desc}</p>
            </div>
        `;
        itemsContainer.appendChild(item);
    });
    
    const items = document.querySelectorAll('.timeline-item');
    
    // Actualizar progreso y estados activos
    function updateProgress() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const scrollPercent = (scrollLeft / maxScroll) * 100;
        
        // Actualizar barra de progreso
        progressFill.style.width = `${Math.max(0, Math.min(100, scrollPercent))}%`;
        
        // Activar items según progreso
        items.forEach((item, index) => {
            const itemThreshold = (index / (items.length - 1)) * 100;
            if (scrollPercent >= itemThreshold - 10) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Event listeners
    container.addEventListener('scroll', updateProgress, { passive: true });
    
    // Inicializar
    updateProgress();
    
    // Scroll automático suave al cargar
    setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    }, 100);
})();
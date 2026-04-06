/**
 * LIS-01: Entrada Secuencial FadeUp
 * Intersection Observer con delays escalonados
 */

(function() {
    const listContainer = document.getElementById('itemList');
    
    // Datos de ejemplo
    const items = [
        { icon: '🎨', title: 'Diseño Creativo', desc: 'Soluciones visuales únicas que capturan la esencia de tu marca' },
        { icon: '⚡', title: 'Alto Rendimiento', desc: 'Animaciones optimizadas que funcionan a 60fps en cualquier dispositivo' },
        { icon: '📱', title: '100% Responsive', desc: 'Experiencias fluidas desde móviles hasta pantallas 4K' },
        { icon: '🎯', title: 'UX Centrada', desc: 'Interfaces intuitivas diseñadas para convertir visitantes' },
        { icon: '🔒', title: 'Código Limpio', desc: 'CSS y JavaScript modular y mantenible a largo plazo' },
        { icon: '🚀', title: 'Escalable', desc: 'Arquitectura preparada para crecer con tu negocio' }
    ];
    
    // Generar HTML
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'seq-item';
        li.innerHTML = `
            <div class="seq-icon">${item.icon}</div>
            <div class="seq-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
            <span class="seq-number">0${index + 1}</span>
        `;
        listContainer.appendChild(li);
    });
    
    // Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const index = Array.from(listContainer.children).indexOf(item);
                
                // Delay escalonado basado en el índice
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 150); // 150ms entre cada elemento
                
                observer.unobserve(item);
            }
        });
    }, observerOptions);
    
    // Observar todos los items
    document.querySelectorAll('.seq-item').forEach(item => {
        observer.observe(item);
    });
})();

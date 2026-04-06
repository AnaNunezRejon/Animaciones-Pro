/**
 * BAN-01: Hero Parallax Multicapa
 * Efecto parallax con múltiples capas que responden al ratón
 * Usa transform3d para aceleración GPU
 */

(function() {
    const container = document.getElementById('heroContainer');
    const layers = document.querySelectorAll('.parallax-layer');
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Factor de suavizado (menor = más suave pero más lento)
    const ease = 0.1;
    
    function handleMouseMove(e) {
        // Calcular posición relativa al centro de la pantalla
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        mouseX = (e.clientX - centerX) / centerX;
        mouseY = (e.clientY - centerY) / centerY;
    }
    
    function animate() {
        // Interpolación suave
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;
        
        // Aplicar transformaciones a cada capa según su velocidad
        layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed) || 0.5;
            const x = currentX * speed * 50; // Multiplicador de amplitud
            const y = currentY * speed * 30;
            
            // Usar translate3d para aceleración GPU
            layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        
        requestAnimationFrame(animate);
    }
    
    // Inicializar
    if (container) {
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        animate();
    }
    
    // Reset en móvil (usar gyroscopio si está disponible)
    if (window.DeviceOrientationEvent && window.innerWidth <= 768) {
        window.addEventListener('deviceorientation', (e) => {
            mouseX = (e.gamma || 0) / 45; // -45 to 45 degrees
            mouseY = (e.beta || 0) / 45;  // -45 to 45 degrees
        }, { passive: true });
    }
})();
/**
 * BOT-01: Ripple + Liquid Fill
 * Efecto de onda expansiva al clic + relleno líquido
 */

(function() {
    // Inicializar colores personalizados
    document.querySelectorAll('.liquid-ripple-btn').forEach(btn => {
        const color = btn.dataset.color;
        if (color) {
            btn.style.setProperty('--btn-color', color);
        }
        
        // Evento de clic para ripple
        btn.addEventListener('click', function(e) {
            const ripple = this.querySelector('.btn-ripple');
            
            // Resetear animación
            this.classList.remove('clicking');
            void this.offsetWidth; // Trigger reflow
            
            // Posicionar el ripple desde el punto de clic
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Iniciar animación
            this.classList.add('clicking');
            
            // Remover clase después de la animación
            setTimeout(() => {
                this.classList.remove('clicking');
            }, 600);
        });
    });
})();
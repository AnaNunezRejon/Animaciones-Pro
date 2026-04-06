/**
 * BOT-02: Neón Flicker Glow
 * Efecto de parpadeo aleatorio realista - CSS puro
 * Este archivo es opcional, todo funciona con CSS
 */

(function() {
    // Opcional: Añadir variación aleatoria adicional vía JS
    // para hacer el parpadeo aún más orgánico
    
    const buttons = document.querySelectorAll('.neon-flicker-btn');
    
    buttons.forEach(btn => {
        // Variación aleatoria de la duración de la animación
        const randomDuration = 3 + Math.random() * 2; // 3-5 segundos
        btn.querySelector('.neon-text').style.animationDuration = `${randomDuration}s`;
        
        // Efecto de sonido visual (vibración sutil en hover)
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'shake 0.1s infinite';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.animation = '';
        });
    });
    
    // Keyframes de vibración dinámico
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0) translateY(-2px); }
            25% { transform: translateX(-1px) translateY(-2px); }
            75% { transform: translateX(1px) translateY(-2px); }
        }
    `;
    document.head.appendChild(style);
})();
/**
 * BOT-03: Menú Radial 3D
 * Botón que se expande en menú circular con opciones
 */

(function() {
    const container = document.getElementById('radialMenu');
    const mainBtn = document.getElementById('mainBtn');
    const options = document.querySelectorAll('.radial-option');
    
    let isOpen = false;
    
    // Toggle del menú
    mainBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        container.classList.toggle('active', isOpen);
        mainBtn.classList.toggle('active', isOpen);
    });
    
    // Cerrar al hacer clic en una opción
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const action = option.querySelector('.opt-label').textContent;
            console.log(`Acción seleccionada: ${action}`);
            
            // Efecto de selección
            option.style.transform = option.style.transform + ' scale(1.2)';
            option.style.background = '#6366f1';
            
            setTimeout(() => {
                isOpen = false;
                container.classList.remove('active');
                mainBtn.classList.remove('active');
                
                // Reset estilo
                setTimeout(() => {
                    option.style.transform = '';
                    option.style.background = '';
                }, 300);
            }, 200);
        });
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target) && isOpen) {
            isOpen = false;
            container.classList.remove('active');
            mainBtn.classList.remove('active');
        }
    });
    
    // Soporte para tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            isOpen = false;
            container.classList.remove('active');
            mainBtn.classList.remove('active');
        }
    });
})();
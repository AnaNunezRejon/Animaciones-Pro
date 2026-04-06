/**
 * BAN-02: Typewriter Cinemático
 * Efecto de máquina de escribir con múltiples frases
 */

(function() {
    const textElement = document.getElementById('typewriter');
    const phrases = [
        'Creatividad sin límites',
        'Diseño que impacta',
        'Animaciones que emocionan',
        'Experiencias únicas'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Borrando
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Más rápido al borrar
        } else {
            // Escribiendo
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100 + Math.random() * 50; // Velocidad variable natural
        }
        
        // Cambiar de frase
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pausa al terminar de escribir
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pausa antes de escribir nueva frase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Iniciar efecto cuando el DOM esté listo
    if (textElement) {
        type();
    }
})();
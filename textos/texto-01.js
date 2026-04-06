function initReveal() {
    const text = document.getElementById('revealText');
    const content = text.textContent;
    text.innerHTML = '';
    
    content.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.05}s`;
        text.appendChild(span);
    });
}

function replay() {
    initReveal();
}

// Iniciar al cargar
initReveal();
const text = document.getElementById('smokeText');
const content = text.textContent;
text.innerHTML = '';

content.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char;
    // Retardo aleatorio para efecto más orgánico
    const delay = Math.random() * 0.3;
    span.style.transitionDelay = `${delay}s`;
    text.appendChild(span);
});
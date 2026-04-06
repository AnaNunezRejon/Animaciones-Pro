const text = document.getElementById('waveText');
const content = text.textContent;
text.innerHTML = '';

content.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    text.appendChild(span);
});
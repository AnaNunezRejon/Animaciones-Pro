const card = document.getElementById('glassCard');
const shine = card.querySelector('.glass-shine');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    shine.style.setProperty('--x', `${x}%`);
    shine.style.setProperty('--y', `${y}%`);
});
let overlay = null;

function expandCard(card) {
    if (card.classList.contains('expanded')) {
        closeExpanded();
        return;
    }
    
    // Crear overlay si no existe
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.onclick = closeExpanded;
        document.body.appendChild(overlay);
    }
    
    card.classList.add('expanded');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExpanded() {
    const expanded = document.querySelector('.expandable-card.expanded');
    if (expanded) {
        expanded.classList.remove('expanded');
    }
    if (overlay) {
        overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExpanded();
});
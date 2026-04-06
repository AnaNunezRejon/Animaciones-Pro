// ============================================
// DATOS DE ANIMACIONES
// ============================================
const animationsDB = {
    banners: [
        { id: 'BAN-03', file: 'banner-03', name: 'Cinema Glitch Partículas', desc: 'Efecto cinematográfico con glitch y partículas canvas', recent: true },
        { id: 'BAN-02', file: 'banner-02', name: 'Typewriter Cinemático', desc: 'Máquina de escribir con degradado animado', recent: true },
        { id: 'BAN-01', file: 'banner-01', name: 'Hero Parallax Multicapa', desc: 'Parallax con múltiples capas de profundidad', recent: true },
        { id: 'BAN-06', file: 'banner-06', name: 'Morphing SVG', desc: 'Formas vectoriales que se transforman fluidamente', recent: false },
        { id: 'BAN-05', file: 'banner-05', name: 'Split Screen Revelado', desc: 'Dos mitades que se separan para revelar contenido', recent: false },
        { id: 'BAN-04', file: 'banner-04', name: 'Lente de Cine', desc: 'Vignette dinámico con zoom y ruido de película', recent: false }
    ],
    listas: [
        { id: 'LIS-03', file: 'lista-03', name: 'Cuadrícula Tilt 3D', desc: 'Grid interactivo con inclinación 3D y efecto de luz', recent: true },
        { id: 'LIS-02', file: 'lista-02', name: 'Timeline Horizontal', desc: 'Línea de tiempo con barra de progreso animada', recent: true },
        { id: 'LIS-01', file: 'lista-01', name: 'Entrada Secuencial', desc: 'Fade-up escalonado con Intersection Observer', recent: true },
        { id: 'LIS-06', file: 'lista-06', name: 'Cascada Lateral', desc: 'Elementos que deslizan desde los lados', recent: false },
        { id: 'LIS-05', file: 'lista-05', name: 'Stagger Cards', desc: 'Tarjetas con retardo tipo burbuja', recent: false },
        { id: 'LIS-04', file: 'lista-04', name: 'Acordeón Desenfoque', desc: 'Efecto de blur en expansión acordeón', recent: false }
    ],
    botones: [
        { id: 'BOT-03', file: 'boton-03', name: 'Menú Radial 3D', desc: 'Botón que expande opciones en círculo', recent: true },
        { id: 'BOT-02', file: 'boton-02', name: 'Neón Parpadeante', desc: 'Efecto de luz neón con flicker realista', recent: true },
        { id: 'BOT-01', file: 'boton-01', name: 'Ripple Líquido', desc: 'Onda expansiva con relleno fluido', recent: true },
        { id: 'BOT-06', file: 'boton-06', name: 'Expansión de Texto', desc: 'Icono que gira mientras el texto se expande', recent: false },
        { id: 'BOT-05', file: 'boton-05', name: 'Corte Diagonal', desc: 'Efecto de corte con relleno gradiente', recent: false },
        { id: 'BOT-04', file: 'boton-04', name: 'Botón Magnético', desc: 'Sigue el cursor con efecto de atracción', recent: false }
    ],
    tarjetas: [
        { id: 'TAR-03', file: 'tarjeta-03', name: 'Expansión Modal', desc: 'Tarjeta que se expande a pantalla completa', recent: true },
        { id: 'TAR-02', file: 'tarjeta-02', name: 'Vidrio Esmerilado', desc: 'Efecto glassmorphism con luz dinámica', recent: true },
        { id: 'TAR-01', file: 'tarjeta-01', name: 'Flip 3D', desc: 'Rotación 3D con contenido en ambas caras', recent: true }
    ],
    textos: [
        { id: 'TEX-03', file: 'texto-03', name: 'Humo Disipante', desc: 'Texto que se evapora al pasar el ratón', recent: true },
        { id: 'TEX-02', file: 'texto-02', name: 'Wave 3D', desc: 'Cada letra ondula en eje Z independiente', recent: true },
        { id: 'TEX-01', file: 'texto-01', name: 'Revela Letras', desc: 'Aparece carácter por carácter con estilo', recent: true }
    ],
    fondos: [
        { id: 'FON-03', file: 'fondo-03', name: 'Dots Reactivos', desc: 'Patrón de puntos que reacciona al cursor', recent: true },
        { id: 'FON-02', file: 'fondo-02', name: 'Aurora Boreal', desc: 'Gradiente fluido tipo aurora en movimiento', recent: true },
        { id: 'FON-01', file: 'fondo-01', name: 'Ondas Sinusoidales', desc: 'Ondas animadas matemáticamente en canvas', recent: true }
    ]
};

const categoryInfo = {
    banners: { name: 'Banners', icon: '🎯', count: 6 },
    listas: { name: 'Listas', icon: '📋', count: 6 },
    botones: { name: 'Botones', icon: '🔘', count: 6 },
    tarjetas: { name: 'Tarjetas', icon: '🃏', count: 3 },
    textos: { name: 'Textos Animados', icon: '🔤', count: 3 },
    fondos: { name: 'Fondos Dinámicos', icon: '🎨', count: 3 }
};

// ============================================
// RENDERIZADO
// ============================================

function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    
    Object.keys(animationsDB).forEach(catKey => {
        const anims = animationsDB[catKey];
        const info = categoryInfo[catKey];
        
        const recentAnims = anims.filter(a => a.recent);
        const olderAnims = anims.filter(a => !a.recent);
        
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = catKey;
        section.innerHTML = `
            <div class="category-header">
                <div class="category-title">
                    <div class="category-icon">${info.icon}</div>
                    <div>
                        <h2>${info.name}</h2>
                        <span>${info.count} animaciones disponibles</span>
                    </div>
                </div>
                ${olderAnims.length > 0 ? `
                    <button class="btn-view-more" data-category="${catKey}">
                        Ver más <span class="count">+${olderAnims.length}</span>
                    </button>
                ` : ''}
            </div>
            <div class="animations-grid" id="grid-${catKey}">
                ${recentAnims.map(anim => createAnimCard(anim, catKey)).join('')}
                ${olderAnims.map(anim => createAnimCard(anim, catKey, true)).join('')}
            </div>
        `;
        
        container.appendChild(section);
    });
}

function createAnimCard(anim, category, hidden = false) {
    const previewPath = `${category}/${anim.file}.html`;
    
    return `
        <article class="anim-card ${hidden ? 'anim-hidden' : ''}" 
                 data-category="${category}"
                 onclick="openModal('${category}', '${anim.file}', '${anim.id}', '${anim.name}')">
            <div class="anim-preview">
                <iframe class="preview-iframe" src="${previewPath}" loading="lazy"></iframe>
                <div class="preview-overlay">
                    <span>Ver demo</span>
                </div>
            </div>
            <div class="anim-info">
                <span class="anim-code">${anim.id}</span>
                <h3 class="anim-name">${anim.name}</h3>
                <p class="anim-desc">${anim.desc}</p>
                <div class="anim-meta">
                    <span>📁 ${category}</span>
                    <span>⚡ CSS${category === 'fondos' || category === 'textos' || category === 'banners' ? '+JS' : ''}</span>
                </div>
            </div>
        </article>
    `;
}

// ============================================
// NAVEGACIÓN
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Actualizar active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll suave a la sección
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Observer para actualizar el menú al hacer scroll
    const sections = document.querySelectorAll('.category-section');
    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.cat === id);
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// ============================================
// MODAL
// ============================================

function openModal(category, file, id, name) {
    document.getElementById('modalCode').textContent = id;
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('previewFrame').src = `${category}/${file}.html`;
    document.getElementById('previewModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('previewModal').classList.remove('active');
    document.getElementById('previewFrame').src = '';
    document.body.style.overflow = '';
}

function toggleViewMore(btn) {
    const category = btn.dataset.category;
    const hiddenCards = document.querySelectorAll(`#grid-${category} .anim-hidden`);
    
    hiddenCards.forEach(card => {
        card.classList.toggle('visible');
    });
    
    btn.classList.toggle('expanded');
    btn.innerHTML = btn.classList.contains('expanded') ? 
        'Ver menos' : 
        `Ver más <span class="count">+${hiddenCards.length}</span>`;
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    initNavigation();
    
    // Botones "Ver más"
    document.querySelectorAll('.btn-view-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleViewMore(btn);
        });
    });
    
    // Cerrar modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('previewModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    
    // Reducir movimiento
    document.getElementById('reduceMotion').addEventListener('click', function() {
        document.body.classList.toggle('reduce-motion');
        this.classList.toggle('active');
    });
    
    // Tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

// Exponer funciones globales
window.openModal = openModal;
/**
 * LIS-03: Grid 3D Tilt con Efecto de Luz
 * Transformaciones 3D que siguen al ratón
 */

(function() {
    const grid = document.getElementById('tiltGrid');
    
    const cards = [
        { 
            image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            icon: '🎨', 
            category: 'Diseño',
            title: 'Identidad Visual',
            desc: 'Creamos marcas memorables que conectan con tu audiencia'
        },
        { 
            image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
            icon: '📱', 
            category: 'UI/UX',
            title: 'Interfaces Digitales',
            desc: 'Experiencias de usuario intuitivas y atractivas'
        },
        { 
            image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
            icon: '⚡', 
            category: 'Motion',
            title: 'Animaciones Web',
            desc: 'Movimiento que da vida a tus proyectos digitales'
        },
        { 
            image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', 
            icon: '🚀', 
            category: 'Estrategia',
            title: 'Growth Digital',
            desc: 'Estrategias para escalar tu presencia online'
        },
        { 
            image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', 
            icon: '📸', 
            category: 'Contenido',
            title: 'Producción Visual',
            desc: 'Fotografía y video de alto impacto para tu marca'
        },
        { 
            image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', 
            icon: '💎', 
            category: 'Premium',
            title: 'Experiencias VIP',
            desc: 'Soluciones exclusivas para clientes exigentes'
        }
    ];
    
    // Generar tarjetas
    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'tilt-card';
        cardEl.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 60%; background: ${card.image};"></div>
            <div class="tilt-overlay"></div>
            <div class="tilt-light"></div>
            <div class="tilt-float-icon">${card.icon}</div>
            <div class="tilt-card-inner">
                <div class="tilt-category">${card.category}</div>
                <h3 class="tilt-title">${card.title}</h3>
                <p class="tilt-desc">${card.desc}</p>
            </div>
        `;
        grid.appendChild(cardEl);
    });
    
    // Efecto tilt 3D
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcular rotación (máximo 15 grados)
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            // Aplicar transformación
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Actualizar posición de la luz
            const light = card.querySelector('.tilt-light');
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            light.style.setProperty('--mouse-x', `${percentX}%`);
            light.style.setProperty('--mouse-y', `${percentY}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
        
        // Efecto de entrada escalonada
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
    });
    
    // Animación de entrada con Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.tilt-card').forEach(card => observer.observe(card));
})();
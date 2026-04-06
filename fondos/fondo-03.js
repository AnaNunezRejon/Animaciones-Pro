const canvas = document.getElementById('dotsCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let dots = [];
const dotSize = 3;
const spacing = 40;
const mouseRadius = 150;

let mouse = { x: null, y: null };

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initDots();
}

function initDots() {
    dots = [];
    for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
            dots.push({
                x: x,
                y: y,
                baseX: x,
                baseY: y,
                size: dotSize,
                color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
            });
        }
    }
}

function animate() {
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, width, height);
    
    dots.forEach(dot => {
        // Calcular distancia al ratón
        let dx = mouse.x - dot.x;
        let dy = mouse.y - dot.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        // Efecto de repulsión
        if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            dot.x = dot.baseX - Math.cos(angle) * force * 30;
            dot.y = dot.baseY - Math.sin(angle) * force * 30;
            dot.size = dotSize + force * 5;
        } else {
            // Volver a posición original
            dot.x += (dot.baseX - dot.x) * 0.1;
            dot.y += (dot.baseY - dot.y) * 0.1;
            dot.size += (dotSize - dot.size) * 0.1;
        }
        
        // Dibujar punto
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
        
        // Líneas cercanas
        dots.forEach(otherDot => {
            let dx = dot.x - otherDot.x;
            let dy = dot.y - otherDot.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < spacing * 1.5 && dist > 0) {
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(otherDot.x, otherDot.y);
                ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - dist / (spacing * 1.5))})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

resize();
animate();
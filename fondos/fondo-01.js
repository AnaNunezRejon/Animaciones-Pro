const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let waves = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Wave {
    constructor(y, amplitude, frequency, speed, color) {
        this.y = y;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.color = color;
        this.offset = 0;
    }
    
    draw() {
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        for (let x = 0; x <= width; x += 5) {
            const y = this.y + Math.sin((x * this.frequency) + this.offset) * this.amplitude;
            ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        
        this.offset += this.speed;
    }
}

function init() {
    resize();
    
    // Crear múltiples ondas con diferentes parámetros
    waves = [
        new Wave(height * 0.5, 50, 0.01, 0.02, 'rgba(99, 102, 241, 0.3)'),
        new Wave(height * 0.6, 40, 0.008, 0.025, 'rgba(139, 92, 246, 0.3)'),
        new Wave(height * 0.7, 60, 0.012, 0.015, 'rgba(236, 72, 153, 0.2)'),
        new Wave(height * 0.8, 45, 0.009, 0.03, 'rgba(99, 102, 241, 0.2)')
    ];
}

function animate() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);
    
    waves.forEach(wave => wave.draw());
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resize();
    init();
});

init();
animate();
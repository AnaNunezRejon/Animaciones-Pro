/**
 * BAN-06: Morphing SVG
 * Animación de formas orgánicas usando interpolación de paths
 */

const path1 = document.getElementById('morphShape');
const path2 = document.getElementById('morphShape2');

// Definir las formas (círculo, estrella, blob, etc.)
const shapes = [
    // Círculo
    "M500,200 Q700,200 700,400 Q700,600 500,600 Q300,600 300,400 Q300,200 500,200",
    // Estrella
    "M500,150 L550,350 L750,350 L600,480 L650,680 L500,550 L350,680 L400,480 L250,350 L450,350 Z",
    // Blob orgánico
    "M500,100 Q650,150 700,300 Q750,450 600,550 Q450,650 300,500 Q150,350 300,200 Q400,100 500,100",
    // Hexágono suavizado
    "M500,180 Q600,180 650,280 Q700,380 650,480 Q600,580 500,580 Q400,580 350,480 Q300,380 350,280 Q400,180 500,180"
];

let currentShape = 0;
let nextShape = 1;
let progress = 0;
const speed = 0.008;

function interpolate(path1, path2, t) {
    // Simplificación: asumimos que los paths tienen el mismo número de puntos
    // En producción usar una librería como flubber.js o KUTE.js
    const p1 = path1.match(/[\d.]+/g).map(Number);
    const p2 = path2.match(/[\d.]+/g).map(Number);
    
    const result = [];
    for (let i = 0; i < p1.length; i++) {
        result.push(p1[i] + (p2[i] - p1[i]) * easeInOutCubic(t));
    }
    
    // Reconstruir el path
    const commands = path1.match(/[MLQCZ]/g) || ['M', 'Q', 'Q', 'Q', 'Q', 'Z'];
    let rebuilt = "";
    let idx = 0;
    
    for (let cmd of commands) {
        rebuilt += cmd;
        if (cmd === 'M' || cmd === 'L') {
            rebuilt += result[idx++] + "," + result[idx++];
        } else if (cmd === 'Q') {
            rebuilt += result[idx++] + "," + result[idx++] + " ";
            rebuilt += result[idx++] + "," + result[idx++];
        }
    }
    
    return rebuilt;
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animate() {
    progress += speed;
    
    if (progress >= 1) {
        progress = 0;
        currentShape = nextShape;
        nextShape = (nextShape + 1) % shapes.length;
    }
    
    const currentPath = interpolate(shapes[currentShape], shapes[nextShape], progress);
    path1.setAttribute('d', currentPath);
    
    // Segunda forma con offset
    const offsetProgress = (progress + 0.5) % 1;
    const shape2Current = (currentShape + 1) % shapes.length;
    const shape2Next = (nextShape + 1) % shapes.length;
    const path2D = interpolate(shapes[shape2Current], shapes[shape2Next], offsetProgress);
    path2.setAttribute('d', path2D);
    
    requestAnimationFrame(animate);
}

// Iniciar
animate();
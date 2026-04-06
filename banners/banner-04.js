// Insertar CSS en el panel
const cssContent = `/* CSS completo de Lente de Cine */
.cine-lens-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.film-grain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.08;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    animation: grain 0.5s steps(10) infinite;
}

.vignette-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, 
        transparent 0%, transparent 40%, 
        rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%);
    animation: vignette-pulse 4s ease-in-out infinite;
}

.cine-content {
    position: relative;
    z-index: 3;
    text-align: center;
    color: white;
    animation: content-zoom 20s ease-in-out infinite;
}`;

document.getElementById('cssCode').textContent = cssContent;

function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    event.target.classList.add('active');
}

function copyCode(id) {
    navigator.clipboard.writeText(document.getElementById(id).textContent);
    event.target.textContent = '¡Copiado!';
    setTimeout(() => event.target.textContent = 'Copiar CSS', 2000);
}
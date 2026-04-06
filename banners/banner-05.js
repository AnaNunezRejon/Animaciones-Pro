const container = document.getElementById('splitContainer');

container.addEventListener('click', (e) => {
    if (!container.classList.contains('open')) {
        container.classList.add('open');
    }
});

function resetSplit() {
    container.classList.remove('open');
}
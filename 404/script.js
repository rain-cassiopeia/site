const letters = document.getElementById('l');

function foo(event) {
    const mouseY = event.clientY / window.innerHeight;
    const mouseX = Math.abs(event.clientX - (window.innerHeight)) / (window.innerHeight / 2);

    const rgbaColor = `rgba(255, 255, 255, ${2*mouseY+mouseX})`;
    letters.style.color = rgbaColor;
}

document.addEventListener('mousemove', foo);
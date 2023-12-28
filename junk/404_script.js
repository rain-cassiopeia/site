function updateBackgroundTransparency(event) {
    const mouseY = (event.clientY / window.innerHeight) * 30;

    const rgbaColor = `rgba(20, ${mouseY + 80}, ${90-mouseY}, 1)`;
    document.body.style.backgroundColor = rgbaColor;
}

document.addEventListener('mousemove', updateBackgroundTransparency);
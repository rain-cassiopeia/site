function getRandomPastelColor() {
    const maxHue = 360; 
    const minSaturation = 30;
    const maxSaturation = 70; 
    const minLightness = 70;
    const maxLightness = 90; 
  
    const hue = Math.floor(Math.random() * maxHue);
    const saturation = Math.floor(Math.random() * (maxSaturation - minSaturation) + minSaturation);
    const lightness = Math.floor(Math.random() * (maxLightness - minLightness) + minLightness);
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }
  
  // Function to change button color
  function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = getRandomPastelColor();
  }
  
  // Set interval to change button colors every 2 seconds
  setInterval(() => {
    changeButtonColor('1');
  }, 2000);
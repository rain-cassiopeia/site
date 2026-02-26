function checkWindowSize() {
  if (window.innerWidth <= 600) {
    window.location.href = "/mobile";
  }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);  

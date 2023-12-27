//______________resizing____________
function checkWindowSize() {
    if (window.innerWidth >= 600) {
      window.location.href = "/";
    }
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
  //____________________________________
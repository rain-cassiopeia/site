//______________resizing____________
function checkWindowSize() {
    if (window.innerWidth <= 600) {
      window.location.href = "/mobile";
    }
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
  //____________________________________
  
  // var someElements = document.getElementsByTagName("p");
  // for (var i = 0; i < someElements.length; i++) {
  //   someElements[i].style.fontSize = "1.5vw";
  // }
  
  document.getElementById("_1").style.width = "30vw";
  
  but_ton = document.getElementById("_2");
  but_ton.style.paddingTop = "1vw";
  but_ton.style.paddingRight = "1.5vw";
  but_ton.style.paddingLeft = "1.5vw";
  but_ton.style.paddingBottom = "1vw";
  
  button = document.getElementById("_3");
  button.style.paddingTop = "1vw";
  button.style.paddingRight = "1.5vw";
  button.style.paddingLeft = "1.5vw";
  button.style.paddingBottom = "1vw";
  
  
  
  
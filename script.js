function checkWindowSize() {
  if (window.innerWidth <= 600) {
    window.location.href = "/mobile";
  }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);

document.getElementById("_1").style.width = "30vw";
but_ton = document.getElementById("_2");
but_ton.style.paddingTop = "1vw";
but_ton.style.paddingRight = "1.5vw";
but_ton.style.paddingLeft = "1.5vw";
but_ton.style.paddingBottom = "1vw";
but_ton = document.getElementById("_3");
but_ton.style.paddingTop = "1vw";
but_ton.style.paddingRight = "1.5vw";
but_ton.style.paddingLeft = "1.5vw";
but_ton.style.paddingBottom = "1vw";
but_ton = document.getElementById("_4");
but_ton.style.paddingTop = "1vw";
but_ton.style.paddingRight = "1.5vw";
but_ton.style.paddingLeft = "1.5vw";
but_ton.style.paddingBottom = "1vw";
  
  
  
  
  
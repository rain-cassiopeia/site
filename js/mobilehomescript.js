//currently employed on my index_mobile.html page


//______________resizing____________
function checkWindowSize() {
    if (window.innerWidth >= 600) {
      window.location.href = "/~rwhite2/";
    }
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
  //____________________________________
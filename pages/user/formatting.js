//button to scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  const but = document.getElementById('hideme');
  if (window.scrollY > 100) {
      but.style.opacity = '0';
  } else {
      but.style.opacity = '1';
  }
});

// *

// Handle keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if (event.metaKey || event.ctrlKey) {
    if (event.key === 'b' || event.key === 'B') {
      document.execCommand('bold');
      event.preventDefault();
    } else if (event.key === 'i' || event.key === 'I') {
      document.execCommand('italic');
      event.preventDefault();
    } else if (event.key === 'u' || event.key === 'U') {
      document.execCommand('underline');
      event.preventDefault();
    }
  }
});

//*

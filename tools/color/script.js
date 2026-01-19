function setFocusAndCursor() {
  const edit_me = document.getElementById('edit_me');
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(edit_me);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  edit_me.focus();
}

setFocusAndCursor();

var edit_me = document.getElementById('edit_me');

edit_me.addEventListener('focusout', (event) => {
  setFocusAndCursor();
});

var dv = document.getElementsByClassName("dv")[0];

dv.addEventListener('input', function() {
  const text = dv.textContent;
  document.body.style.backgroundColor = text;
  colorFavicon(text)
});

const text = dv.textContent;
document.body.style.backgroundColor = text;

// shamelessly stolen from https://chipcullen.com/how-to-make-a-color-changing-favicon
const colorFavicon = (colr) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    document.getElementsByTagName('head')[0].appendChild(link);
    img.src = '';
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = colr;
    ctx.fillRect(0, 0, 32, 32);
    link.href = canvas.toDataURL("image/x-icon");
    const meta = document.querySelector("meta[name='theme-color']") || document.createElement('meta');
    meta.name = "theme-color";
    document.getElementsByTagName('head')[0].appendChild(meta);
    meta.content = colr;
}

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

let edit_me = document.getElementById('edit_me');

edit_me.addEventListener('focusout', (event) => {
    setFocusAndCursor();
});

let dv = document.getElementsByClassName("dv")[0];

dv.addEventListener('input', function() {
    const text = dv.textContent;
    if (text.length == 5 || text.length == 8){
        document.body.style.backgroundColor = text;
        colorFavicon(text);
        colorText(text);
    }
});

const text = dv.textContent;
document.body.style.backgroundColor = text;

const colorText = (colr) => {
    // W3 guideline for luminance is (0.299*R + 0.587*G + 0.114*B)
    // colr.substring(0,2)
    let R; let G; let B;

    if (colr.length == 5) { //one characterfor the # and one for the newline
        R = colr[1]+'0';
        G = colr[2]+'0';
        B = colr[3]+'0';
    } else if (colr.length == 8) {
        R = colr.substring(1,3);
        G = colr.substring(3,5);
        B = colr.substring(5,7);
    } else {return}

    R = parseInt(R, 16);
    G = parseInt(G, 16);
    B = parseInt(B, 16);

    let middle_grey = (0.299*128 + 0.587*128 + 0.114*128);
    let luminance = (0.299*R + 0.587*G + 0.114*B);
    if (luminance > middle_grey) { document.body.style.color = "black";}
    else { document.body.style.color = "white";}
}

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

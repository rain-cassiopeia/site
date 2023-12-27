let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let mouseDX = 0
let mouseDY = 0
let do_slow = true
let isMouseClicked = false;

// -----------------SETTING MOUSE BOOL--------
function updateClickState(isClick) {
    const clickStateElement = document.getElementById('clickState');
    isMouseClicked = isClick;
    clickStateElement.textContent = isMouseClicked ? 'Mouse is clicked.' : 'Mouse is not clicked.';
}
document.addEventListener('mousedown', function () {
    updateClickState(true);
});
document.addEventListener('mouseup', function () {
    updateClickState(false);
});
//----------------------------------------------

//--------------spacebar pressed functionality -----
let isSpacePressed = false;

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        isSpacePressed = true;
        console.log('Space key is pressed!');
    }
});
document.addEventListener('keyup', function (event) {
    if (event.key === ' ') {
        isSpacePressed = false;
        console.log('Space key is released!');
    }
});
//--------------------------------------------

document.addEventListener("mousemove", (event) => {
    x = event.clientX;
    y = event.clientY;
    mouseDX = mouseX - x;
    mouseDY = mouseY - y;
    mouseX = event.clientX;
    mouseY = event.clientY;
    do_slow = false
    //createStar(mouseX, mouseY);
});

function createStar(event) {
    let fadeTime = 1500;
    let velocity_multiplier = 1;
    let doChonk = false;
    if(isMouseClicked && Math.random() > 0.75){
        doChonk = true;
        velocity_multiplier = 0.5;
        fadeTime = 5000;
    }
    if(isSpacePressed){velocity_multiplier *= 5;}

    const star = document.createElement("div");
    if(doChonk){star.className = "chonky_star";}else{star.className = "star";}
    star.id = "sid";
    star.setAttribute('data-time-alive', 1);
    const angle = Math.PI * 2 * Math.random();
    star.setAttribute('data-dx', (Math.cos(angle)-mouseDX*0.17)*velocity_multiplier);
    star.setAttribute('data-dy', (Math.sin(angle)-mouseDY*0.17)*velocity_multiplier);
    document.body.appendChild(star);
    mouseDX = mouseDX * 0.7;
    mouseDY = mouseDY * 0.7;

    star.style.left = `${mouseX + Math.random()}px`;
    star.style.top = `${mouseY + Math.random()}px`;

    setTimeout(() => {
        star.remove();
    }, fadeTime); 
    // star.style.animation = 'fadeOut 2.8s ease-out';
    do_slow = true;
}




function fall() {
    const stars = document.querySelectorAll('.star, .chonky_star'); 
    stars.forEach((star) => {
        const timeAlive = parseInt(star.getAttribute('data-time-alive'), 10) || 0;
        star.setAttribute('data-time-alive', timeAlive + 2);
        const oldY = parseFloat(star.style.top, 10) || 0;
        const oldX = parseFloat(star.style.left, 10) || 0;
        star.style.left = `${(oldX + parseFloat(star.getAttribute('data-dx')))}px`;
        star.style.top = `${(oldY + parseFloat(star.getAttribute('data-dy')))}px`;
        // star.setAttribute('data-dy', star.getAttribute('data-dy')-0.01)
        //star.style.top = `${(oldY + (2 * (timeAlive / 100)))}px`; // Increment the Y coordinate
    });
}


setInterval(fall, 8);
setInterval(createStar, 10);

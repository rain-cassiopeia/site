winX = 0; // window width
winY = 0; // window height
pixX = 0; // number of pixels wide 
pixY = 0; // number of pixels tall
pixList = []; // all pixels, live updated
edgeList = []; // live edges, updated once per cycle
nextEdgeList = []; // next cycle's live edges, accumulating
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');

class Pixel {
    constructor(x, y, living) {
        //x and y are NOT window coordinates, they are pixel coordinates!! 
        //living is bool
        this.x = x;
        this.y = y;
        this.alive = living;
    }
}
class Edge{
    constructor(x, y, color) {
        //color is list of r, g, b.
        this.x = x;
        this.y = y;
        this.alive = true;
        this.color = color;
        // window coordinates! this works for 2x2 pixels, would change for different pixel size.
        this.real_x = 2 * this.x;
        this.real_y = 2 * this.y;
    }
    getFriends() { // all my neighbors are my friends :D
        //returns list of lists of coordinates of living neighbors
        //currently not doing wraparound. might add later
        let friendList = [];
        if (this.x > 0 && !pixList[(this.x - 1) + (pixX * this.y)].alive) { //left
            friendList.push([this.x - 1, this.y]);
        }
        if (this.x < (pixX - 1) && !pixList[(this.x + 1) + (pixX * this.y)].alive) { //right
            friendList.push([this.x + 1, this.y]);
        }
        if (this.y > 0 && !pixList[this.x + (pixX * (this.y - 1))].alive) { //top
            friendList.push([this.x, this.y - 1]);
        }
        if (this.y < (pixY - 1) && !pixList[this.x + (pixX * (this.y + 1))].alive) { //bottom
            friendList.push([this.x, this.y + 1]);
        }
        return friendList;
    }
    tick() { //tweak me too!
        let tweak = false;
        if (Math.random() < (2/3)) {
            tweak = true;
        }
        let friends = this.getFriends()
        let numfriends = friends.length;
        if (numfriends > 1) {
            nextEdgeList.push(this); // this could only be a live edge next round if dead neighbors > 2
            if (tweak) {spawn(this.color, friends[Math.floor(Math.random() * numfriends)])}
        }
        else if (numfriends == 1) {
            if (tweak) {spawn(this.color, friends[0])}
            else {nextEdgeList.push(this)}
        }
    }
}

function mutate(color) { // lots of ways to do this!! TODO: tweak :p
    let newColor = [color[0], color[1], color[2]];
    for (let i=0; i<3; i++) {
        if (Math.random() < (1)) { //tweak me!
            if (Math.random() < 0.5) {
                newColor[i]+= Math.floor(Math.random()*5);
            }
            else {
                newColor[i]-= Math.floor(Math.random()*5);
            }
            if (color[i] > 255) {
                newColor[i] = 255;
            }
            else if (color[i] < 0) {
                newColor[i] = 0;
            }
            
        }
    }
    return newColor;
}

function spawn(parentColor, [px, py]) {
    // console.log(px);
    // console.log(py);
    pixList[px + (pixX * py)].alive = true; 
    let newColor = mutate(parentColor);
    let newPixel = new Edge(px, py, newColor);
    nextEdgeList.push(newPixel); // im assuming it would be quicker to do this without checking but idk
    offscreenCtx.fillStyle = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
    offscreenCtx.fillRect(newPixel.real_x, newPixel.real_y, 2, 2); // 2x2!
}

function cycle() {
    console.log(`${edgeList.length} live edges!`);
    for (let i=0; i<edgeList.length; i++){
        // tick every live edge
        // this handles appending to nextEdgeList and drawing children to offscreenCanvas
        edgeList[i].tick(); 
    }
    edgeList = nextEdgeList;
    nextEdgeList = [];
    ctx.drawImage(offscreenCanvas, 0, 0);
}

function onClick(event) {
    setupCanvas()
    let clickX = Math.floor(event.clientX / 2); // divide by 2 for 2x2 grid!
    let clickY = Math.floor(event.clientY / 2);
    nextEdgeList = [];
    edgeList = [];
    spawn([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)], [clickX, clickY]); // tweak with starting color?
}

function doWindowSize() {
    winX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    winY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    pixX = winX / 2; // 2x2 pixels 
    pixY = winY / 2;
}
function setupCanvas(){
    doWindowSize()
    canvas.width = winX;
    offscreenCanvas.width = winX;
    canvas.height = winY;
    offscreenCanvas.height = winY;
    offscreenCtx.clearRect(0, 0, winX, winY);

    //populating the pixList array:
    pixList = [];
    for (let i=0; i<pixY; i++) { 
        for (let j=0; j<pixX; j++) {
            pixList.push(new Pixel(j, i, false));
        }
    }
}

function animate() {
    cycle();
    requestAnimationFrame(animate);
}



setupCanvas();
animate();
document.addEventListener("click", onClick)

// ctx.fillStyle = 'rgb(2, 200, 255)';
// ctx.fillRect(10, 10, 2, 2);
// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(161, 111, 1, 1);





// const offscreenCanvas = document.createElement('canvas');
// const offscreenCtx = offscreenCanvas.getContext('2d');

// // Draw your objects on the offscreen canvas

// // Draw the offscreen canvas onto the main canvas
// ctx.drawImage(offscreenCanvas, 0, 0);
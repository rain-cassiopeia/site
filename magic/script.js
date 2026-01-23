//the screen origin can be represented in window coordinates by inverting the screen coordinates of the window


function tick() {
    loc_x = window.screenX + window.innerWidth/2;
    loc_y = window.screenY + window.innerHeight/2;
    marco(loc_x, loc_y);

    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();

    Object.values(Dict).forEach(i => {
        ctx.moveTo(window.innerWidth/2, window.innerHeight/2);
        ctx.lineTo(i[0] - window.screenX, i[1] - window.screenY);
        Object.values(Dict).forEach(j => {
            ctx.moveTo(i[0] - window.screenX, i[1] - window.screenY);
            ctx.lineTo(j[0] - window.screenX, j[1] - window.screenY);
        });
    });
    ctx.stroke();
}

var c = document.getElementById("c");
c.width = window.outerWidth;
c.height = window.outerHeight;

var ctx = c.getContext("2d");
ctx.shadowColor = "white";
ctx.shadowBlur = 15;
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "#caa5d3"

const Dict = {};

const channel = new BroadcastChannel("a_magical_think_i_do_not_fully_understand");

if (!self.id) self.id = "win-" + Math.floor(Math.random()*10000);

function marco(loc_x, loc_y) {
    channel.postMessage({
        sender: self.id || "(anon window)",
        loc_x,
        loc_y
    });
}

channel.onmessage = (event) => {
    const { sender, loc_x, loc_y } = event.data;
    Dict[sender] = [loc_x, loc_y];
};

const intervalId = setInterval(tick, 15);
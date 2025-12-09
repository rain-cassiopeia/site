//the screen origin can be represented in window coordinates by inverting the screen coordinates of the window


function tick() {
    loc_x = window.screenX + window.innerWidth/2;
    loc_y = window.screenY + window.innerHeight/2;
    document.getElementById("window_height").innerHTML = window.innerHeight;
    document.getElementById("window_width").innerHTML = window.innerWidth;
    document.getElementById("x_scr").innerHTML = loc_x;
    document.getElementById("y_scr").innerHTML = loc_y;
    //-
    marco(loc_x, loc_y);
    console.log(Dict);

    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();

    

    Object.values(Dict).forEach(value => {
        ctx.moveTo(window.innerWidth/2, window.innerHeight/2);
        ctx.lineTo(value[0] - window.screenX, value[1] - window.screenY);
        ctx.stroke();
    }); 
}

//--

var c = document.getElementById("c");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");

//--
// var a=0;
// var b=0;

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

//var bounding_box = document.getElementsByClassName("data")[0].getBoundingClientRect();
//console.log(bounding_box.top, bounding_box.right, bounding_box.bottom, bounding_box.left);

// document.getElementById("x_win").innerHTML = bounding_box.left + document.getElementsByClassName("data")[0].clientWidth/2;
// document.getElementById("y_win").innerHTML = bounding_box.top + document.getElementsByClassName("data")[0].clientHeight/2;

// document.addEventListener("click", function (event) {
//     console.log("Client X:", event.clientX, "Client Y:", event.clientY);
// });
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    const button = document.querySelector('.toggle-sidebar-button');
    button.classList.toggle('active');
}

function syncScroll() {
    var scrollableDiv = document.getElementById('bar');
    var syncedDiv = document.querySelector('.toggle-sidebar-button');
    syncedDiv.style.top = String(15 - Number(scrollableDiv.scrollTop)) + 'px';
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
}

// switches -------------
switch_1_state = true;
document.getElementById('switch1').addEventListener('change', function() {
    switch_1_state = !switch_1_state;
    //TOGGLE AUTOMATIC MODE HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    AUTO_MODE = switch_1_state;
    if (switch_1_state) {
        document.getElementById('content1').style.maxHeight = '0px';
        //RUN = true; // THIS NEEDS TO BE CHANGED WHEN TEMPGLOBAL IS CHANGED
    } else {
        document.getElementById('content1').style.maxHeight = '45px';
    }
});

switch_2_state = true;
document.getElementById('switch2').addEventListener('change', function() {
    switch_2_state = !switch_2_state;
    //TOGGLE RANDOM STARTING COLOR HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    RAND_COLOR = switch_2_state;
    let color_list = hexToRgb(document.getElementById('inputColor').value);
    START_R = color_list[0];
    START_G = color_list[1];
    START_B = color_list[2];
    //REFERENCE THAT COLOR USING document.getElementById('inputColor').value;
    if (switch_2_state) {
        document.getElementById('content2').style.maxHeight = '0px';
    } else {
        document.getElementById('content2').style.maxHeight = '45px';
    }
});

//teehee just some color things
document.getElementById('inputColor').addEventListener('change', function() {
    let color_list = hexToRgb(document.getElementById('inputColor').value);
    START_R = color_list[0];
    START_G = color_list[1];
    START_B = color_list[2];
});
//ok thats all

switch_3_state = false;
document.getElementById('switch3').addEventListener('change', function() {
    switch_3_state = !switch_3_state;
    //TOGGLE COLOR WRAPPING HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    COLORWRAPPING = switch_3_state;
});

document.getElementById('switch4').addEventListener('change', function() {
    DARKMODE = !DARKMODE;
    if (DARKMODE) {
        document.querySelector('body').style.backgroundColor = 'rgb(33,32,31)';
        document.querySelector('.sidebar').style.backgroundColor = 'rgb(33,32,31)';
    }
    else {
        document.querySelector('body').style.backgroundColor = 'rgb(251, 249, 246)';
        document.querySelector('.sidebar').style.backgroundColor = 'rgb(238, 233, 224)';
    }

});
// buttons ------------
//RUN = false; //run during manual mode here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function but_1() {
    RUN = !RUN;
    var button = document.getElementById('but_1');
    if (RUN) {
        button.textContent = 'pause';
    } else {
        button.textContent = 'run';
    }
}
function but_2() {
    //clear! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clearCanvas();
}
// sliders ----------
var slider_0 = document.getElementById("slider_0");
var slider_0_output = document.getElementById("slider_0_output");
slider_0_output.innerHTML = slider_0.value;
slider_0.oninput = function() {
  slider_0_output.innerHTML = this.value;
  DELAY = 100-this.value;
}

var slider_1 = document.getElementById("slider_1");
var slider_1_output = document.getElementById("slider_1_output");
slider_1_output.innerHTML = slider_1.value;
slider_1.oninput = function() {
  slider_1_output.innerHTML = this.value;
  // SET PROBABILITY OF MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  SUM_ODDS = this.value/100;
  //reference it using this.value
}

var slider_2 = document.getElementById("slider_2");
var slider_2_output = document.getElementById("slider_2_output");
slider_2_output.innerHTML = slider_2.value;
slider_2.oninput = function() {
  slider_2_output.innerHTML = this.value;
  // SET PROBABILITY OF RED MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  R_ODDS = this.value/100;
  //reference it using this.value
}

var slider_3 = document.getElementById("slider_3");
var slider_3_output = document.getElementById("slider_3_output");
slider_3_output.innerHTML = slider_3.value;
slider_3.oninput = function() {
  slider_3_output.innerHTML = this.value;
  // SET PROBABILITY OF GREEN MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  G_ODDS = this.value/100;
  //reference it using this.value
}

var slider_4 = document.getElementById("slider_4");
var slider_4_output = document.getElementById("slider_4_output");
slider_4_output.innerHTML = slider_4.value;
slider_4.oninput = function() {
  slider_4_output.innerHTML = this.value;
  // SET PROBABILITY OF BLUE MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  B_ODDS = this.value/100;
  //reference it using this.value
}

// numeric inputs -----
// get ready for hell
// R_UP = 8
// R_DOWN = 8
// G_UP = 8
// G_DOWN = 8
// B_UP = 8
// B_DOWN = 8

function update_rup() {R_UP = document.getElementById("i1").value;}
function update_rdown() {R_DOWN = document.getElementById("i2").value;}
function update_gup() {G_UP = document.getElementById("i3").value;}
function update_gdown() {G_DOWN = document.getElementById("i4").value;}
function update_bup() {B_UP = document.getElementById("i5").value;}
function update_bdown() {B_DOWN = document.getElementById("i6").value;}

function rupup() {document.getElementById("i1").value = String(Math.abs(Number(document.getElementById("i1").value) + 1));update_rup()}
function rupdown() {document.getElementById("i1").value = String(Math.abs(Number(document.getElementById("i1").value) - 1));update_rup()}
function rdownup() {document.getElementById("i2").value = String(Math.abs(Number(document.getElementById("i2").value) + 1));update_rdown()}
function rdowndown() {document.getElementById("i2").value = String(Math.abs(Number(document.getElementById("i2").value) - 1));update_rdown()}
function gupup() {document.getElementById("i3").value = String(Math.abs(Number(document.getElementById("i3").value) + 1));update_gup()}
function gupdown() {document.getElementById("i3").value = String(Math.abs(Number(document.getElementById("i3").value) - 1));update_gup()}
function gdownup() {document.getElementById("i4").value = String(Math.abs(Number(document.getElementById("i4").value) + 1));update_gdown()}
function gdowndown() {document.getElementById("i4").value = String(Math.abs(Number(document.getElementById("i4").value) - 1));update_gdown()}
function bupup() {document.getElementById("i5").value = String(Math.abs(Number(document.getElementById("i5").value) + 1));update_bup()}
function bupdown() {document.getElementById("i5").value = String(Math.abs(Number(document.getElementById("i5").value) - 1));update_bup()}
function bdownup() {document.getElementById("i6").value = String(Math.abs(Number(document.getElementById("i6").value) + 1));update_bdown()}
function bdowndown() {document.getElementById("i6").value = String(Math.abs(Number(document.getElementById("i6").value) - 1));update_bdown()}






document.addEventListener("click", onClickPrompt)
function onClickPrompt() {
    var clickedElement = event.target;
    var isExcluded = clickedElement.closest('.sidebar') !== null || clickedElement.closest('.toggle-sidebar-button') !== null;
    if (!isExcluded) {
        const prompt = document.querySelector('.prompt');
        prompt.style.display = "none";
    }
}



function downloadCanvas() {
    var link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'cool_image.png';
    link.click();
}
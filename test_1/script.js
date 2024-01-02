function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    const button = document.querySelector('.toggle-sidebar-button');
    button.classList.toggle('active');
}

// switches -------------
switch_1_state = true;
document.getElementById('switch1').addEventListener('change', function() {
    switch_1_state = !switch_1_state;
    //TOGGLE AUTOMATIC MODE HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    if (switch_1_state) {
        document.getElementById('content1').style.maxHeight = '0px';
        tempglobal_run = true; // THIS NEEDS TO BE CHANGED WHEN TEMPGLOBAL IS CHANGED
    } else {
        document.getElementById('content1').style.maxHeight = '45px';
    }
});

switch_2_state = true;
document.getElementById('switch2').addEventListener('change', function() {
    switch_2_state = !switch_2_state;
    //TOGGLE RANDOM STARTING COLOR HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //REFERENCE THAT COLOR USING document.getElementById('inputColor').value;
    if (switch_2_state) {
        document.getElementById('content2').style.maxHeight = '0px';
    } else {
        document.getElementById('content2').style.maxHeight = '45px';
    }
});

switch_3_state = false;
document.getElementById('switch3').addEventListener('change', function() {
    switch_3_state = !switch_3_state;
    //TOGGLE COLOR WRAPPING HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
});
// buttons ------------
tempglobal_run = false; //run during manual mode here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function but_1() {
    tempglobal_run = !tempglobal_run;
    var button = document.getElementById('but_1');
    if (tempglobal_run) {
        button.textContent = 'pause';
    } else {
        button.textContent = 'run';
    }
}
function but_2() {
    //clear! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
// sliders ----------
var slider_1 = document.getElementById("slider_1");
var slider_1_output = document.getElementById("slider_1_output");
slider_1_output.innerHTML = slider_1.value;
slider_1.oninput = function() {
  slider_1_output.innerHTML = this.value;
  // SET PROBABILITY OF MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //reference it using this.value
}

var slider_2 = document.getElementById("slider_2");
var slider_2_output = document.getElementById("slider_2_output");
slider_2_output.innerHTML = slider_2.value;
slider_2.oninput = function() {
  slider_2_output.innerHTML = this.value;
  // SET PROBABILITY OF RED MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //reference it using this.value
}

var slider_3 = document.getElementById("slider_3");
var slider_3_output = document.getElementById("slider_3_output");
slider_3_output.innerHTML = slider_3.value;
slider_3.oninput = function() {
  slider_3_output.innerHTML = this.value;
  // SET PROBABILITY OF GREEN MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //reference it using this.value
}

var slider_4 = document.getElementById("slider_4");
var slider_4_output = document.getElementById("slider_4_output");
slider_4_output.innerHTML = slider_4.value;
slider_4.oninput = function() {
  slider_4_output.innerHTML = this.value;
  // SET PROBABILITY OF BLUE MUTATION HERE >>???>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //reference it using this.value
}

// numeric inputs -----
// get ready for hell
tempglobal_rup = 8
tempglobal_rdown = 8
tempglobal_gup = 8
tempglobal_gdown = 8
tempglobal_bup = 8
tempglobal_bdown = 8

function update_rup() {tempglobal_rup = document.getElementById("i1").value;}
function update_rdown() {tempglobal_rdown = document.getElementById("i2").value;}
function update_gup() {tempglobal_gup = document.getElementById("i3").value;}
function update_gdown() {tempglobal_gdown = document.getElementById("i4").value;}
function update_bup() {tempglobal_bup = document.getElementById("i5").value;}
function update_bdown() {tempglobal_bdown = document.getElementById("i6").value;}

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






document.addEventListener("click", onClick)
function onClick() {
    const prompt = document.querySelector('.prompt');
    prompt.style.display = "none";
}
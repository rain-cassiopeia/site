const SOLUTION = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
// const SOLUTION = '#abcdef'
let GUESS = '';
// red = SOLUTION.substring(1,3);
// green = SOLUTION.substring(3,5);
// blue = SOLUTION.substring(5,7);
console.log(SOLUTION);

document.getElementById('solution_circle').style.fill = SOLUTION;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let ROUND = 0; //idk why i wnated to call it this the literal name would be GUESSES


function setFocusAndCursor(id) { //id is a string
  const edit_me = document.getElementById(id);
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(edit_me);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  edit_me.focus();
};

let CURRENT_FOCUS = 1;

setFocusAndCursor(CURRENT_FOCUS.toString());

const pattern = "0123456789abcdefABCDEF"

const ids = ['1', '2', '3', '4', '5', '6'];

ids.forEach(id => { //setting typing event listener for each id
    document.getElementById(id).addEventListener('input', function (event) {
        //adding input event listener to first div
        if (pattern.includes(event.target.textContent)) { //valid
            CURRENT_FOCUS += 1;
            setFocusAndCursor(CURRENT_FOCUS.toString());
        } else { //invalid
            event.target.textContent = ''; //undoes ur typing
        }
    });
});

document.getElementById('guess_container').addEventListener('keydown', function (event) {
    //backspace and enter can be handled by the parent cause behavior is not per id
    if (event.key === 'Backspace') {
        if (CURRENT_FOCUS > 1) {
            event.preventDefault(); //ur not allowed to backspace in here
            CURRENT_FOCUS -= 1;
            document.getElementById(CURRENT_FOCUS.toString()).textContent = '';
            setFocusAndCursor(CURRENT_FOCUS.toString()); //but u can backspace over there lol
        }
    }
    if (event.key === 'Enter') {
        event.preventDefault(); //we were advancing for some reason. ig i should have used regex after all
        if (CURRENT_FOCUS === 7){
            // this is sooooo silly. so i have a hidden extra div with id seven that the focus
            //moves to when youved filled the rest so as to prevent more typing
            console.log("AAAAA");
            funky();
        }
    }
    if (event.key === 'Tab') {
        event.preventDefault(); //prevent tabbing through
    }
});

document.getElementById('guess_container').addEventListener('focusout', function (event) {
    setFocusAndCursor(CURRENT_FOCUS.toString()); //nah, let's stay *focused*
});

// element.style.display = "";

function funky() { // this runs when a guess gets guessed
    ROUND += 1;

    guess = '#' + // calculate the guess
        document.getElementById('1').textContent +
        document.getElementById('2').textContent +
        document.getElementById('3').textContent +
        document.getElementById('4').textContent +
        document.getElementById('5').textContent +
        document.getElementById('6').textContent;
    console.log(guess)

    document.getElementById('guess_'+ROUND.toString()+'_circle').style.fill = guess;

    ids.forEach(id => {
        if (document.getElementById(id).textContent == SOLUTION[parseInt(id)]) { //set color for correct digits
            document.getElementById('r_'+ROUND.toString()+'_'+id).style.backgroundColor = "green";
        };

        document.getElementById('r_'+ROUND.toString()+'_'+id).textContent =
            document.getElementById(id).textContent; // copy over guess into this guess display

        document.getElementById(id).textContent = ''; // and delete guess from guess container
    });

    CURRENT_FOCUS = 1; // reset typing focus
    setFocusAndCursor('1');

    document.getElementById('result_'+ROUND.toString()).style.display = "";
};

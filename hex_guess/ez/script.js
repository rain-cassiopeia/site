const SOLUTION = '#'+(Math.random() * 0xFFF << 0).toString(16).padStart(3, '0');
console.log(SOLUTION);
document.getElementById('solution_circle').style.fill = SOLUTION;
document.body.style.background = `linear-gradient(${SOLUTION}, ${SOLUTION} 75px, white 115px)`;

if (colorText(SOLUTION, document.getElementById("title"))) {
    document.getElementById("title").style.color = "white";
} else {
    document.getElementById("title").style.color = "black";
}


const NUM_ROUNDS = 6;
const allowed_chars = "0123456789abcdefABCDEF" //allowed characters
const ids = ['1', '2', '3'];


let GUESS = '';
let ROUND = 0; //idk why i wnated to call it this the literal name would be GUESSES
let CURRENT_FOCUS = 1; //we start at the beginning
let unguessed_ids = [1, 2, 3, 4]; //nothing is guessed at the start.
//its necessary to have 4 there because there's a fourth invisible id that the focus moves to so as
//to prevent further typing at line end.

// red = SOLUTION.substring(1,3);
// green = SOLUTION.substring(3,5);
// blue = SOLUTION.substring(5,7);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ids.forEach(id => { //setting typing event listener for each element in guess_container
    document.getElementById(id).addEventListener('input', function (event) {
        if (allowed_chars.includes(event.target.textContent)) { //valid
            // CURRENT_FOCUS = unguessed_ids[unguessed_ids.indexOf(CURRENT_FOCUS)+1]; //current focus set to next unguessed option
            // CURRENT_FOCUS += 1;
            console.log("current focus is "+CURRENT_FOCUS);
            console.log("unguessed_ids.indexOf(CURRENT_FOCUS) is " + unguessed_ids.indexOf(CURRENT_FOCUS));
            console.log("unguessed_ids[unguessed_ids.indexOf(CURRENT_FOCUS)+1] IS "+unguessed_ids[unguessed_ids.indexOf(CURRENT_FOCUS)+1]);
            CURRENT_FOCUS = unguessed_ids[unguessed_ids.indexOf(CURRENT_FOCUS)+1];
            setFocusAndCursor(CURRENT_FOCUS.toString());
        } else { //invalid
            event.target.textContent = ''; //undoes ur typing
        }
    });
});

function setFocusAndCursor(id) {
    //focuses and sets cursor on the appropraite editable space in guess_container
    //id is a string
  const edit_me = document.getElementById(id);
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(edit_me);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  edit_me.focus();
};

setFocusAndCursor(CURRENT_FOCUS.toString()); //start with focus at the start

document.getElementById('guess_container').addEventListener('keydown', function (event) {
    //backspace and enter can be handled by the parent cause behavior is not per id
    if (event.key === 'Backspace') {
        event.preventDefault(); //ur not allowed to backspace in here
        if (unguessed_ids.indexOf(CURRENT_FOCUS) > 0 ){ //we can only backspace if there is space to go back!
            CURRENT_FOCUS = unguessed_ids[unguessed_ids.indexOf(CURRENT_FOCUS)-1];
            document.getElementById(CURRENT_FOCUS.toString()).textContent = '';
            setFocusAndCursor(CURRENT_FOCUS.toString()); //but u can backspace over there lol
        }
    }
    if (event.key === 'Enter') {
        event.preventDefault(); //we were advancing for some reason. ig i should have used regex after all
        if (CURRENT_FOCUS == 4){
            // this is sooooo silly. so i have a hidden extra div with id seven that the focus
            //moves to when youved filled the rest so as to prevent more typing
            process_guess();
        }
    }
    if (event.key === 'Tab') {
        event.preventDefault(); //prevent tabbing through
    }
});

document.getElementById('guess_container').addEventListener('focusout', function (event) {
    setFocusAndCursor(CURRENT_FOCUS.toString()); //nah, let's stay *focused*
});

function process_guess() { // this runs when a guess gets guessed
    if (ROUND == 0) {document.getElementById('hint_circles').style.visibility = ""} //show top circles

    ROUND += 1;

    guess = '#' + // calculate the guess
        document.getElementById('1').textContent +
        document.getElementById('2').textContent +
        document.getElementById('3').textContent;
    console.log("GUESS IS " + guess + " ON ROUND " + ROUND);

    document.getElementById('guess_circle').style.fill = guess;
    document.getElementById('guess_'+ROUND.toString()+'_circle').style.fill = guess; //fill guess circles


    if (guess == SOLUTION) {
        console.log("WE WIN THESE");
        // do smth
    }

    ids.forEach(id => {
        document.getElementById('r_'+ROUND.toString()+'_'+id).textContent =
            document.getElementById(id).textContent; // copy over current guess into appropraite guess display

        if (document.getElementById(id).textContent == SOLUTION[parseInt(id)]) { //handle correct digits
            document.getElementById(id).style.backgroundColor = "#95cB72"; //set color in guess container
            document.getElementById('r_'+ROUND.toString()+'_'+id).style.backgroundColor = "#95cB72" //and above

            //why the hell does js not have a list index remove function
            var temp_index = unguessed_ids.indexOf(parseInt(id));
            if (temp_index !== -1) {
                unguessed_ids.splice(temp_index, 1); // all that to remove guessed ids
            }
        } else {
            document.getElementById(id).textContent = ''; // and delete guess from guess container
        }
    });

    CURRENT_FOCUS = unguessed_ids[0]; // reset typing focus
    setFocusAndCursor(CURRENT_FOCUS.toString());

    document.getElementById('result_'+ROUND.toString()).style.display = "";

    if (ROUND == NUM_ROUNDS) { //hide guess container when game is done
        document.getElementById('guess_container').style.display = "none";
        //probably want to do more here eventually. like a you lost dialogue.
    }
};

function colorText(colr, txt) { //sets text to black or white for max background contrast
    // W3 guideline for luminance is (0.299*R + 0.587*G + 0.114*B)
    // colr is a string hex code including the #
    R = colr[1]+'0';
    G = colr[2]+'0';
    B = colr[3]+'0';

    R = parseInt(R, 16);
    G = parseInt(G, 16);
    B = parseInt(B, 16);

    let middle_grey = (0.299*128 + 0.587*128 + 0.114*128);
    let luminance = (0.299*R + 0.587*G + 0.114*B);
    if (luminance > middle_grey) {return false}
    else {return true}
}

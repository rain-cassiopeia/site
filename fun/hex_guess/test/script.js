const SOLUTION = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
let GUESS = '';
// red = SOLUTION.substring(1,3);
// green = SOLUTION.substring(3,5);
// blue = SOLUTION.substring(5,7);
console.log(SOLUTION);

document.getElementById('solution_circle').style.fill = SOLUTION;

// document.getElementById('my_form').addEventListener

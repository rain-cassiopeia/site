/* 

Here's some nice global variables to tweak with the visuals!

i now reccomend against tweaking these manually, that's what the buttons on the 
actual webpage are for!! :D 

*/

// let r g and b values go from 255 -> 1 and vice versa. cool when combined with only increase/decrease
COLORWRAPPING = false

// the probability any given color to mutate if selected
R_ODDS = 1
G_ODDS = 1
B_ODDS = 1
// vs the probability of mutation to begin with
SUM_ODDS = 0.3

// max amount values can be shifted up or down
R_UP   = 8
R_DOWN = 8
G_UP   = 8
G_DOWN = 8
B_UP   = 8
B_DOWN = 8

// delta is odds of reproduction. 
MUTATE_DELTA = 1
D_DELTA = 0.1
MIN_DELTA = 0.1

// starting color
RAND_COLOR = true 
START_R = 250
START_G = 250
START_B = 250

// automatic mode
AUTO_MODE = true 
RUN = false

// this is so stupid
DARKMODE = false

// delay goes up to 100, slows down propagation
DELAY = 0

//time, actually the number of cycles we have ATTEMPTED
T = 0
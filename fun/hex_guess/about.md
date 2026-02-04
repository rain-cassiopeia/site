## ok so here's my idea

It's a game! Like a functional game, my first on this site lol.
Like one of the wordle clones, to be specific a colordle.com clone. 
I would like to do a hex guess style of game, I want to play something
like that but I have never found one that I liked. 

Colordle is really true to the wordle theme—the first two guesses are tons of 
fun where you intuit getting close to the color, but after that it's a process 
of trying to figure out which digits are in it and where they go via the wordle
method. I don't think the wordle trick is a good fit for this game tho because 
there isn't like a 'type of word' limitation, so you get some bad randomness in 
the last couple of guesses where like on digit will be one of the other five in 
the hex code and you just get random neighborhood guesses.

HexGuess is cool, where it shows an over under on each digit. One issue with this
is showing a different value for each of the two digits of each value. that feels
a little unintuitive, making it less color recognition and more engineering digits.
Also not sure how good of a method over under is, because that's one of the things 
I want to improve my ability on. Like with colordle, I love looking at the preview
and being like hmm is this more or less red. 

But in that case what indicator do I use? Without over under, the only one I can think 
of is wordle, is this digit correct or not. But if I remove the 'right digit, wrong 
place' indicator there's not much to go off. I want to avoid randomly guessing like five digits in a row for the second place.

Ok, there's percent correct. I could do that per channel or overall. If it's per channel, you 
could kind of learn what percentage corresponds to how many digits off u are, so as nice as that is
maybe it makes more sense to do a single overall percent correctness. 

So first thought: overall percent correctness and digit correctness indicators? 
This seems jank but it's my first thought.

Alternatives: 
- per-channel percent correctness and no digit correctness indicators
- first digit and both digit correctness indicators but no just-second-digit ones. could go with overall %


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

ok let's talk about implementation

overall percentage correctness is interesting. does it make a difference to average or sum
the channels? I think not.. ok but what about how middle grey has a min correctness of 50% whereas
black or white have a min correctness of 0. Not sure if that's correctable,, color wrapping doesn't really make any sense here..
because a colorspace like rgb is a finite 3d space, some points are simply closer to all other points.

ok, so we take each color channel of the guess and find its abs() difference from the answer channel,
i guess sum those and divide by 3*256. or 255, that is.

ok this is easy to do statically.
- on load, generate random color and show it somehow
- have six digit guess input, allow user to type and hit enter
- indicate correct letters and display percentage correctness, as well as displaying the guessed color somehow

OMG here's a thought, minor detail actually but whatevs, what if we lock the correct colors! cause its not like
wordle ur not incentivised to guess more. i kind of like that, little convenience thing. that way ppl def wont forget

soo what do we want it to look like :D

i dont think having the whole background as either the guessed or actual color is that good of an idea

##ok implementation is trickier than i imagined

so im just going to have to have a good plan going into this.

consideration: I want this to be really mobile compatible. However, I don't want coming up
with a nice mobile design to be a significant roadblock for implementation so im
going to just LEAVE THAT FOR LATER lmfao

`
TITLE
guess this color O
_ _ _ _ _ _
\/

O x x x x x x
  _ _ _ _ _ _

\/

O x x x x x x
O x x B x B x
  _ _ _ _ _ _
`

ok i like this. RULE: absolutely no color previews

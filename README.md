# time-signatures
A game to help musicians identify different meter with listening examples. 


This is a React-App rendering instances of React-Player (using Soundcloud URL's). Since I was not able to find a public API that contained data about specific songs including the time signatures, I compiled the array of data myself. 

The game works by setting state based on whether the user's selection is correct. Once a state change is detected, the app renders another song from the array to choose from. 

Correct answers are indicated by a green button and the app re-rendering. Incorrect answers are indicated by a red button. 

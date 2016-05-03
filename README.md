# memory
Final Project for Drawing on the Web

##Concept

Exploring JavaScript randomness through randomly placing images inside of styled div elements

##How it works

* Click a black div card to select it, then click another. If both divs display the same image, then the opacity of the div is set to 0, meaning   they technically disappear.
  * When this happens, your score goes up by 2: you get 1 point for each card that has disappeared. 
  * Whenever a click or disappearing action occurs, a sound will occur. I edited these sounds using Adobe Audition and made them play using Javascript audio functions.

* When your score is 12, SOUND THE AIRHORNS! You've won the game!
  * I used AJAX to pull the win message content from another file
  * You are prompted to play again. The 'Play Again' text is actually an SVG image that you can click to reload the game.

##Randomness
* I created 3 arrays: two arrays each for a set of random numbers 1-6, and an images array that would store html img strings i created based on the numbers generated. 
  * The reason I needed two random number arrays is to ensure that there are exactly two of each number in the images array.
  * After generating these random numbers and using string manipulation to put image tags into my images array, I shuffled the position of the images using a for loop.
  * The innerHTML of each div tag was assigned an image based on the array index position.


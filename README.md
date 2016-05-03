# memory
Final Project for Drawing on the Web

##Concept

Exploring JavaScript randomness through randomly placing images inside of styled div elements

##How it works

* Click a black div card to select it, then click another. If both divs display the same image, then the opacity of the div is set to 0, meaning   they technically disappear.
  * When this happens, your score goes up by 2: you get 1 point for each card that has disappeared. 
  * Whenever a click or disappearing action occurs, a sound will occur.

* When your score is 12, SOUND THE AIRHORNS! You've won the game!
  * I used AJAX to pull the win message content from another file
  * You are prompted to play again. The 'Play Again' text is actually an SVG image that you can click to reload the game.

##Randomness
* I created 3 arrays: two arrays each for a set of random numbers 1-6, and an images array that would store html img strings i created based on the numbers generated. 
  * The reason I needed two random number arrays is to ensure that there are exactly two of each number in the images array.
  * After generating these random numbers and using string manipulation to put image tags into my images array, I shuffled the position of the images using a for loop.
  * The innerHTML of each div tag was assigned an image based on the array index position.

##Misc
*Images were taken from my random background dump on my computer
*Sounds were taken as free stock sounds then edited on Adobe Audition for a more suitable sound for the specific action
*If you want to cheat, you can open the console log and check the array position for each image string


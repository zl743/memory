var cardSelect = document.querySelectorAll('.card');
var score = document.querySelector('#score');
var moves = document.querySelector('#moves');
var number = 0;
var count = 0;
var moveCount = 0;
var sound = new Audio('click.wav');
var winSound = new Audio('win.wav');
var disappearSound = new Audio('disappear.wav');

function flipCard(e) {
	selectedCard = e.target;
	console.log(e);
	console.log(e.target);
	if (number == 0 && selectedCard.className != 'done' && selectedCard.className == "front"){
		moveCount += 1;
		moves.innerHTML = '<h3>Moves-' + moveCount + '</h3>';
		selectedCard.parentNode.style.transform = 'rotateY(180deg)'
		selectedCard.className = 'selected';
		if (sound.paused) {
			sound.play();
		} else {
			sound.pause();
			sound.currentTime = 0;
		}
		sound.play();
		number += 1;
		return number;}
	else if (number == 1 && selectedCard.className != 'done' && selectedCard.className == "front"){
		moveCount += 1;
		moves.innerHTML = '<h3>Moves-' + moveCount + '</h3>';
		selectedCard.parentNode.style.transform = 'rotateY(180deg)'
		selectedCard.className = 'selected2';
		if (sound.paused) {
			sound.play();
		} else {
			sound.pause();
			sound.currentTime = 0;
		}
		sound.play();
		var card1 = document.querySelector('.selected');
		var card2 = document.querySelector('.selected2');
		console.log(card1.nextSibling.nextSibling);
		var timing = setTimeout (function() {
			if (card1.nextSibling.nextSibling.innerHTML == card2.nextSibling.nextSibling.innerHTML){
				card1.parentNode.style.opacity = '0';
				card1.className = 'done';
				card2.className = 'done';
				card2.parentNode.style.opacity = '0';
				disappearSound.play();
				
				var count = document.querySelectorAll('.done').length;
				console.log(count)
				moves.innerHTML = '<h3>Moves-' + moveCount + '</h3>';
				score.innerHTML = '<h3>Score-' + count + '</h3>';
				var winTime = setTimeout ( function() {
					if (count == 12){
					e.preventDefault();
					var winMessage = document.querySelector('#win').href;
					var xhr = new XMLHttpRequest();
	 				xhr.onreadystatechange = function() {
		 				if (xhr.readyState == 4 && xhr.status ==200) {
			  				document.querySelector('#gameboard').innerHTML = xhr.responseText;
		  					}
	 					};
					xhr.open("GET", winMessage, true);
		  			xhr.send();
					winSound.play();
				}},500);
			} else{
				card1.className = 'front';
				card1.parentNode.style.transform = 'rotateY(360deg)'
				card2.className = 'front';
				card2.parentNode.style.transform = 'rotateY(360deg)'
			}},500);
		number -=1;
		return number;
	}
	
};


cardSelect[0].addEventListener('click', flipCard);
cardSelect[1].addEventListener('click', flipCard);
cardSelect[2].addEventListener('click', flipCard);
cardSelect[3].addEventListener('click', flipCard);
cardSelect[4].addEventListener('click', flipCard);
cardSelect[5].addEventListener('click', flipCard);
cardSelect[6].addEventListener('click', flipCard);
cardSelect[7].addEventListener('click', flipCard);
cardSelect[8].addEventListener('click', flipCard);
cardSelect[9].addEventListener('click', flipCard);
cardSelect[10].addEventListener('click', flipCard);
cardSelect[11].addEventListener('click', flipCard);

var array = [];
var array2 = [];
var images = [];
var rng;

while(array.length<6){
	 rng = Math.round(5*Math.random());
	 if (array.indexOf(rng) == -1){
		 var image = '<img src="img-' + rng + '.jpg" width="100px" height="100px">'
		 images.push(image);
		 array.push(rng);
	 }
	 console.log(array);
}
while(array2.length<6){
	 rng = Math.round(5*Math.random());
	 if (array2.indexOf(rng) == -1){
		 var image = '<img src="img-' + rng + '.jpg" width="100px" height="100px">'
		 images.push(image);
		 array2.push(rng);
	 }
	 if (array2.length==6){
		 
	 }
	 console.log(array2);
}

function shuffleArray(images) {
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i];
        images[i] = images[j];
        images[j] = temp;
    }
	for (var i = 0; i<12; i++){
		cardSelect[i].childNodes[3].innerHTML = images[i];
	}
     return images;
}
shuffleArray(images);
console.log(images);

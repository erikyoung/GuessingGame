const qwerty = document.getElementById('qwerty'); 
const overlay = document.getElementById('overlay'); 
const phrase = document.getElementById('phrase'); 
const letters = document.getElementsByClassName('letter'); 
const ul = document.getElementsByTagName('ul')[0]; 
const startButton = document.querySelector('.start-button'); 
const lettersShown = document.getElementsByClassName('show'); 
const heart = document.getElementsByTagName('img');
const svg = document.querySelector('.svg'); 
const title = document.querySelector('.title'); 
const overlayTitle = document.querySelector("h2");
let missed = 0; 

let phrases = [
	"Pat do your homework", 
	"Pat stop teasing turtle", 
	"Pat stop looking at the tv", 
	"Pat brush your teeth", 
	"Pat do not tease your sister"

]



function getRandomPhraseAsArray(arr) {
	let randomString = arr[Math.floor(Math.random()*arr.length)];
	let splitString = randomString.split(""); 
	return splitString; 
}

function addPhraseToDisplay(arr) {
	for (var i = 0; i < arr.length; i++) {
		let li = document.createElement('li'); 
		li.textContent = arr[i]; 
		ul.appendChild(li); 
		if (arr[i] != " ") {
			li.className = "letter"; 
		} else {
			li.className = "space"; 
		}
	}
}

const phraseArray = getRandomPhraseAsArray(phrases); 
addPhraseToDisplay(phraseArray); 

 function checkLetter(btn) {
 	let guessed = false; 
 	for (var i = 0; i < letters.length; i++) {
 		
 		if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
 			letters[i].classList.add("show"); 
 			guessed = true; 
 		}
 	}
 	return guessed; 
 }

 function checkWin() {
 	if (letters.length === lettersShown.length) {
 		overlay.style.display = ""; 
 		overlay.className = "win"; 
 		title.innerHTML = "<h1>You Win!</h1>";
      	startButton.textContent = "Start Again!"; 
      	svg.style.display = "none"; 
 		resetGame(); 
 		
 	} else if (missed === 5) {
 		overlay.style.display = "";
 		overlay.className = "lose";
 		title.innerHTML = "<h1>Game Over!</h1>";
      	startButton.textContent = "Start Again!"; 
      	svg.style.display = "none"; 
 		resetGame(); 
 	} 
 }

 function resetGame() {
 	
 	overlay.style.display ="flex"; 
 	missed = 0; 
 	resetHearts(); 
 	changeChosenButtons(); 
 	//to reset the game we need to replenish the hearts
 	//we need to erase the phrase that is showing
 	//we need to reset the number of misses
 	//
 }

 function changeChosenButtons() {

 	let buttonCheck = document.getElementsByTagName('button');
 	for (var i = 0; i < buttonCheck.length; i++) {
 		buttonCheck[i].className = ""; 
 		buttonCheck[i].disabled = false; 
 	}
 		

 }

 function resetHearts () {
 	for (var i = 0; i < heart.length; i++) {
 		let newHeart = heart[i]; 
 		newHeart.setAttribute('src', 'images/liveHeart.png'); 
 	}
 }



 qwerty.addEventListener('click', (event) => {
 		let letterFound = checkLetter(event);

 	if (event.target.tagName === "BUTTON") {
 		event.target.classList = "chosen"; 
 		event.target.disabled = "true"; 
 		if (letterFound === false && missed < 5) {
 			heart[missed].setAttribute('src', 'images/lostHeart.png'); 
 			missed++; 

 		}
 	}
 	checkWin(); 
 }); 




startButton.addEventListener('click', () => {
	overlay.style.display = "none"; 
}); 
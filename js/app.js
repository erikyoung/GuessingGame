const qwerty = document.getElementById('qwerty'); 
const overlay = document.getElementById('overlay'); 
const phrase = document.getElementById('phrase'); 
const letters = document.getElementsByClassName('letter'); 
const ul = document.getElementsByTagName('ul')[0]; 
const startButton = document.querySelector('.start-button'); 
const lettersShown = document.getElementsByClassName('show'); 
const heart = document.getElementsByTagName('img');
let missed = 0; 

let phrases = [
	"Pat do your homework", 
	"Pat stop teasing turtle", 
	"Pat stop looking at the TV", 
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
 		//check if they match
 		if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
 			letters[i].classList = "show"; 
 			guessed = true; 
 		}
 	}
 	return guessed; 
 }

 function checkWin() {
 	if (letters.length === lettersShown.length) {
 		overlay.style.display = "";
 		overlay.className = "win"; 
 		overlay.innerHTML = "You Win!";
 		
 	} else if (missed === 5) {
 		overlay.style.display = ""; 
 		overlay.className = "lose"; 
 		overlay.innerHTML = "<h1>You lose, now go do your homework!</h1>"; 

 	}
 }

 qwerty.addEventListener('click', (event) => {
 		const letterFound = checkLetter(event);

 	if (event.target.tagName === "BUTTON") {
 		event.target.className = "chosen"; 
 		event.target.disabled = true; 
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
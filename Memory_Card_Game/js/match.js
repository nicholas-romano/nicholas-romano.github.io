// Global Variables
// An array with all 52 cards in a playing card deck:
var cards = ['ace-clubs', 'ace-diamonds', 'ace-hearts', 'ace-spades', 'two-clubs', 'two-diamonds', 'two-hearts', 'two-spades', 'three-clubs', 'three-diamonds', 'three-hearts', 'three-spades',
	     'four-clubs', 'four-diamonds', 'four-hearts', 'four-spades', 'five-clubs', 'five-diamonds', 'five-hearts', 'five-spades', 'six-clubs', 'six-diamonds', 'six-hearts', 'six-spades',
	     'seven-clubs', 'seven-diamonds', 'seven-hearts', 'seven-spades', 'eight-clubs', 'eight-diamonds', 'eight-hearts', 'eight-spades', 'nine-clubs', 'nine-diamonds',
	     'nine-hearts', 'nine-spades', 'ten-clubs', 'ten-diamonds', 'ten-hearts', 'ten-spades', 'jack-clubs', 'jack-diamonds', 'jack-hearts', 'jack-spades', 'queen-clubs', 'queen-diamonds',
	     'queen-hearts', 'queen-spades', 'king-clubs', 'king-diamonds', 'king-hearts', 'king-spades'];

//Two cards are in play at one time. Ids are stored here:
var cardsInPlay = [];
//Two cards in play class names are stored here for comparison to find a match:
var cardTypes = [];
//Number of attemps:
var numberOfMoves = 0;
//Total matches out of 26 possible:
var matches = 0;

//Current Deck Selection Object:
var gameBoard = document.getElementById('game-board');

var curDeckClasses = gameBoard.classList;

var defaultDeckSelection = document.getElementById('cardback');

var defaultDeckSelectionVal = defaultDeckSelection.value;

var newDeckSelectionVal = "";

// Shuffle Cards:
function shuffleCards() {

    // While there remain elements to shuffle...
    for (var i = cards.length - 1; i > 0; i--) {
        // Generate a random index
        var randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap the card at the current index with the card at the random index
        var tempCard = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = tempCard;
    }
}

//Lays out all cards face-down:
function createBoard() {
	shuffleCards();

  document.getElementById('matches').innerHTML =  0 + " / " + cards.length/2; //displays the matches count at the bottom

		curDeckClasses.add(defaultDeckSelectionVal); //Set the default deck selection
	
    for (var i = cards.length -1; i >= 0; i--) {

      	var card = document.createElement('div');

      	card.setAttribute('id', cards[i]); //adds an id to each card
	
	document.getElementById('game-board').appendChild(card);

    }

    addFlipOverFunctionToAllCards();

    defaultDeckSelection.addEventListener('change', changeCards); //listen for a change in the deck style
}

//Changes card design:
function changeCards(e) {

    newDeckSelectionVal = document.getElementById('cardback').value;
		//removes current deck selection and replaces it with the new deck selection:
		var currentDeck = curDeckClasses[2];
		curDeckClasses.remove(currentDeck);
		curDeckClasses.add(newDeckSelectionVal);

}

function addFlipOverFunctionToAllCards() {
    
    var cardDivs = document.getElementById('game-board').children;
    
    for (var i = cardDivs.length -1; i >= 0; i--) {

        cardDivs[i].addEventListener('click', flipOverCard); //listen for when the player selects a card

    }
}

function removeFlipOverFunctionFromAllCards() {
    
    var cardDivs = document.getElementById('game-board').children;
    
    for (var i = cardDivs.length -1; i >= 0; i--) {

        cardDivs[i].removeEventListener('click', flipOverCard); //remove the event listener for when the player selects a card

    }
}

function removeFlipOverFromMatches() {
    
    var upFacingCards = document.getElementsByClassName('flipUp');
    
    for (i = 0; i < upFacingCards.length; i++) {
	upFacingCards[i].removeEventListener('click', flipOverCard);
    }
}

function flipOverCard(e) {

  var cardType = e.target.getAttribute('id'); //find id of selected card:

  var img = document.createElement('img'); //create an img tag and add it to card

  this.appendChild(img);

  var imgTag = this.querySelector('img');

  imgTag.setAttribute('src', 'images/' + cardType + '.png'); //add the path to the image:
  
  e.target.removeEventListener('click', flipOverCard); //Remvove Event Listener from up-facing card

  var str = cardType; //disect the id name to create a card type class for comparison:
  var res = str.split("-");
  var className = res[0];

  this.className = className;

	document.getElementById(cardType).className += ' flipUp';

  cardsInPlay.push(cardType); //add Ids to the cardsInPlay array to track the two selected cards.

  var addToClassArray = e.target.getAttribute('class'); //find the selected card type and add it to the cardTypes array:
  cardTypes.push(addToClassArray);

  if (cardsInPlay.length === 2) { //check if two cards have been selected:
    
  	numberOfMoves++; //increment number of attempts
	
	document.getElementById('attempts').innerHTML = numberOfMoves; //add attempts count to the attempts id in the html:
	
	var match = isMatch(); //check for a match
	
	if (!match) {
	    document.getElementById('success').innerHTML = "Cards do not match. Please try again."; //if cards don't match, alert player at the top
	    removeFlipOverFunctionFromAllCards();
	    setTimeout(function(){
		addFlipOverFunctionToAllCards();
		removeFlipOverFromMatches();
		turnFaceDown();
		cardTypes = []; //empty cardTypes
	    }, 2000);
	    
	}
	
	if (matches === cards.length / 2) { //check if the player matched all of the cards:
	    
	    handleEndOfGame(); //end the game
	
	}
  }

}

//Loop through the cardsInPlay array:
function turnFaceDown() {
    
    for (i = 0; i < cardsInPlay.length; i++) {
	
      var flipCards = document.getElementById(cardsInPlay[i]);

	    flipCards.removeAttribute('class'); //removes the classes on each card
	    flipCards.innerHTML = ""; //remove the image
	    flipCards.addEventListener('click', flipOverCard); //add the event listener again for when the player selects these two cards
    }
    
    cardsInPlay = []; //empty the cardsInPlay because the attempt is over
    document.getElementById('success').innerHTML = "Choose two cards to find a match."; //update the dialog
}

//compare the two cards in play to see if they match:
function isMatch() {
  var lastCardPlayed = cardTypes[0];
  var currentCard = cardTypes[1];

  if (currentCard === lastCardPlayed) { //if they match, alert the player:
    document.getElementById('success').innerHTML = "You found a match!";

    cardsInPlay = []; //empty cardsInPlay
    cardTypes = []; //empty cardTypes:
    matches++; //increment matches count
    document.getElementById('matches').innerHTML = matches + " / " + cards.length/2; //add new match count to matches html id
    return true;
  }
  else {
    return false;	
  }
}

//when the player has matched all of the cards, alert them:
function handleEndOfGame() {
    document.getElementById('success').innerHTML = "Congratulations! You matched all cards in " + numberOfMoves + " moves.";

}

//when the reset game button is pressed, all cards are turned over, counts are returned to zero (0), and html tags are emptied
function resetGame() {
	  cardsInPlay = [];
    cardTypes = [];
  	numberOfMoves = 0;
  	matches = 0;
	document.getElementById('matches').innerHTML = 0 + " / " + cards.length/2;
  	document.getElementById('game-board').innerHTML = "";
  	document.getElementById('attempts').innerHTML = 0;
  	document.getElementById('success').innerHTML = "Click two cards to start.";
  	turnFaceDown();
  	createBoard();
}
var reset = document.getElementById('reset');
reset.addEventListener('click', resetGame); //call reset when the page is loaded
createBoard(); //begin shuffling, and laying out the cards to begin the game

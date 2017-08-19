console.log("Up and running!");

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
]

var cardsInPlay = [" "];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

checkForMatch();

var flipCard = function() {
	this.getAttribute(data-id).cardId;
	this.setAttribute("src", cards[cardId].cardImage);
	if ( cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	};
	var cardElement = document.createElement('img');
	cardElement.setAttribute("src" , "images/back.png");
	data-id.setAttribute(index === i);
	cardElement.addEventListener('click', "flipCard");
	ocument.qerySelector('cardElement').appendChild('game-board');
}

createBoard();
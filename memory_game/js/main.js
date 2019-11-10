console.log("up and running");



var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var cardOne = cards[0];

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match");
	}
	else
	{
		alert("Sorry. Try again");
	}	
}

function flipCard(){

var cardId = this.getAttribute("data-id");
// display the face of the card selected
console.log("Card Image "+ cards[cardId].cardImage);

this.setAttribute('src', cards[cardId].cardImage);



cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2){
checkForMatch();
}

/*console.log("User flipped "+ cards[cardId].rank);

console.log("Card Rank "+ cards[cardId].rank);
*/



}

function createBoard(){
	for (var i=0; i < cards.length; i++) {

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
/*flipCard(0);

flipCard(2);
*/

createBoard();

/*
if (cardsInPlay.length === 2){
	

}
*/
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

function flipCard(cardId){

console.log("User flipped "+ cards[cardId].rank);
console.log("Card Image "+ cards[cardId].cardImage);
console.log("Card Rank "+ cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

checkForMatch();
}

flipCard(0);

flipCard(2);

/*
if (cardsInPlay.length === 2){
	

}
*/
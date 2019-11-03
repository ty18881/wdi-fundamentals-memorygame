console.log("up and running");



var cards = ["queen", "queen", "king", "king"];

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

console.log("User flipped "+ cards[cardId])
cardsInPlay.push(cards[cardId]);

checkForMatch();
}

flipCard(0);

flipCard(2);

/*
if (cardsInPlay.length === 2){
	

}
*/
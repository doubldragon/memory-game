function cardController ($scope) {

	$scope.deckSize = 52;
	$scope.deck = [];
	$scope.suits = [ '♠','♣','♥',' ♦'];
	
	$scope.buildDeck = function () {
		console.log("building deck");
		$scope.suits.forEach( function (suit){
		for (i = 0; i < ($scope.deckSize/4); i++) {
			$scope.deck.push(i + suit);
		};
});

}



$scope.buildDeck();
}






angular.module('app',[]).controller('cardController', cardController);
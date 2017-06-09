function cardController ($scope) {

	$scope.deckSize = 52;
	$scope.deck = [];
	$scope.suits = [ ' ♠',' ♣',' ♥',' ♦'];
	
	$scope.buildDeck = function () {
		console.log("building deck");
		$scope.suits.forEach( function (suit){
		for (i = 0; i < ($scope.deckSize/4); i++) {
			$scope.deck.push(i + suit);
		};
});
		$scope.shuffleDeck();
}

	$scope.shuffleDeck = function() {
		  var currentIndex = $scope.deck.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = $scope.deck[currentIndex];
		    $scope.deck[currentIndex] = $scope.deck[randomIndex];
		    $scope.deck[randomIndex] = temporaryValue;
		  }

}
	

$scope.buildDeck();
}






angular.module('app',[]).controller('cardController', cardController);
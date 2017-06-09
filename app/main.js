function cardController($scope) {
	$scope.player1_turn = true;
	$scope.player1_score = 0;
	$scope.player2_score = 0;
    $scope.deckSize = 52;
    $scope.deck = [];
    $scope.suits = ['♠', '♣', '♡', '♢'];
    $scope.values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    $scope.revealed = 0;
    $scope.pair = [];

    $scope.buildDeck = function() {
        console.log("building deck");
        $scope.suits.forEach(function(eachSuit) {
            for (i = 0; i < ($scope.values.length); i++) {
                $scope.deck.push({ 
                	id: $scope.values[i], 
                	suit: eachSuit, 
                	revealed: false, 
                	selected: false,
                	matched: false });
            };
        });
        $scope.shuffleDeck();
    }

    $scope.shuffleDeck = function() {
        var currentIndex = $scope.deck.length,
            temporaryValue, randomIndex;

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

    $scope.clickCard = function(card) {
    	var index;
    	if (!$scope.pair.includes(card) && !card.revealed){
    		$scope.revealCard(card); }
    	// 	index = $scope.pair.findIndex(x => x.id==card.id);
    	// 	console.log("Index: " ,index);
    	// 	$scope.pair.splice(index,1);
    	// 	card.revealed= false;
    	// 	console.log("New Pair: ", $scope.pair);
    	// }
    }

    $scope.revealCard = function(card) {
            //push card to array "pair"
            
            $scope.pair.push(card);


            card.selected = true;
            card.revealed = true;
            console.log(card);
            if ($scope.pair.length === 2) {
                $scope.checkMatch();
                
            }
            console.log($scope.pair);
            //if "pair" is a match, change styling and remove clikability
            //if not a match, turn cards over again 
    }


    $scope.isMatch = function() {
        console.log("It's a match!");
        $scope.pair.forEach( 
	            	function (each) {
	            		console.log(each.id);
	            		each.matched = true;
	            		console.log("Each:", each);
	            	});
	    if ($scope.player1_turn){
	    	 $scope.player1_score++ 
	    	} else {
	    		$scope.player2_score++;
	    	};
        $scope.pair = [];

    }

    $scope.notMatch = function() {
            console.log("It's NOT a match!");
            $scope.player1_turn = !$scope.player1_turn;
            setTimeout(function() {
            	console.log("Done with timeout")
	            $scope.pair.forEach( 
	            	function (each) {
	            		console.log(each.id);
	            		each.revealed = false;
	            		each.selected = false;
	            		console.log("Each:", each);
	            	}); 

        		$scope.pair = [];
        	} 
        	, 250);
    }
    $scope.checkMatch = function() {
            if ($scope.pair[0].id === $scope.pair[1].id) {
                $scope.isMatch();
            } else {
                $scope.notMatch();
                console.log($scope.pair);
            }
    };

    
    $scope.buildDeck();
    console.log($scope.deck);
}






angular.module('app', []).controller('cardController', cardController);

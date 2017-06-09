function cardController($scope) {

    $scope.deckSize = 52;
    $scope.deck = [];
    $scope.suits = [' ♠', ' ♣', ' ♥', ' ♦'];
    $scope.revealed = 0;
    $scope.pair = [];

    $scope.buildDeck = function() {
        console.log("building deck");
        $scope.suits.forEach(function(eachSuit) {
            for (i = 0; i < ($scope.deckSize / 4); i++) {
                $scope.deck.push({ id: i, suit: eachSuit, revealed: false });
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

    $scope.revealCard = function(card) {
            //push card to array "pair"
            $scope.pair.push(card);


            card.revealed = !card.revealed;
            console.log(card);
            if ($scope.pair.length === 2) {
                $scope.checkMatch();
                $scope.pair = [];
            }
            console.log($scope.pair);
            //if "pair" is a match, change styling and remove clikability
            //if not a match, turn cards over again 
    }


    $scope.isMatch = function() {
        console.log("It's a match!");
    }

    $scope.notMatch = function() {
            console.log("It's NOT a match!");
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

angular.module('app').controller('quoteCtrl', function($scope, srv){

$scope.test = "Ya Bad";
$scope.quotes = srv.quotes;
$scope.addQuote = function(quoteObj){
    srv.addQuote(quoteObj);
    $scope.newQuote = {};
}

$scope.deleteQuote = function($index){
    srv.deleteQuote($index);
}

});


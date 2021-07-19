var app = angular.module('sse', []) 

function statctrl($scope) {


    $scope.msg = {} 

    var handlecallBack = function(msg) {
        $scope.$apply(function() {
            $scope.msg = json.parse(msg.data)
        })
    } 

    var source = new EventSource('http://localhost:8181/events') 

    source.addEventListener('message', handlecallBack, false)
}
app.controller('percentcontroller', function($scope, $http){
	$scope.val = "Percentage Calculator" 


	$scope.percentOne = {}
	$scope.percentOne.amt1 = 0.0
	$scope.percentOne.amt2 = 0.0
	

	// $scope.doCalculation = function() {
	// 	$http.post("http://localhost:8080/calculate", $scope.TimeInput).then(
			
	// 		function successCallback(response) {
	// 			console.log("jay")
	// 			console.log(response)
	// 			$scope.result = response
	// 		}, 
	// 		function errorCallback(response) {
	// 			console.log("posting of data failed.")
	// 		}
	// 	)
	// }


	$scope.perOne = function() { 
		$http.get("http://localhost:8080/percent/")
	}



})  
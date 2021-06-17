app.controller('percentcontroller', function($scope, $http){
	$scope.val = "Percentage Calculator" 

	$scope.amt1 = 0.0
	$scope.amt2 = 0.0
	

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


	// $scope.perOne = function() { 
	// 	$http.get("http://localhost:8080/percent", {
	// 		params: {
	// 			amt1: $scope.amt1, 
	// 			amt2: $scope.amt2
	// 		}
	// 	}).then(
	// 		function successCallback(res) {
	// 			$scope.result = res 
	// 		}, 
	// 		function errorCallback(res) {
	// 			$scope.result = res 
	// 		}
	// 	)
	// }

		$scope.perOne = function() { 
		$http.get("http://localhost:8080/testget").then(
			function successCallback(res) {
				$scope.result = res.data
			}, 
			function errorCallback(res) {
				$scope.result = res 
			}
		)
	}



})  
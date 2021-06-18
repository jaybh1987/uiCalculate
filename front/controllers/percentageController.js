app.controller('percentcontroller', function($scope, $http){
	$scope.val = "Percentage Calculator" 

	$scope.amt1 = 0.0
	$scope.amt2 = 0.0

	$scope.a1 = 0.0
	$scope.a2 = 0.0 

	$scope.p1 = 0.0
	$scope.p2 = 0.0
	

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

	$scope.percOne = function() {
		$http.get("http://localhost:8080/percent/"+$scope.amt1+"/"+$scope.amt2).then(
			function successcallback(res) {
				$scope.result = res; 
			}, 
			function errorcallback(res) {
				$scope.result = res; 
			}
		)
	}

	//whatper

	$scope.perTwo = function() {
		$http.get("http://localhost:8080/whatper/"+$scope.a1+"/"+$scope.a2).then(
			function successcallback(res) {
				$scope.res = res
			}, 
			function errorfunction(res) {
				$scope.res = res 
			}
		)
	} 

	$scope.perThree = function() {
		$http.get("http://localhost:8080/ofwhat/"+$scope.p1+"/"+$scope.p2).then(
			function successCallback(r) {
				$scope.rs = r
			}, 
			function errorFunction(r) {
				$scope.rs = r
			}
		)
	}
})  
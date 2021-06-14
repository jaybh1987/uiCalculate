app.controller('timecontroller', function($scope, $http){
	$scope.val = "Time Calculator"

	$scope.TimeInput = {}
	$scope.TimeInput.speed = null; 
	$scope.TimeInput.distance = null; 
	$scope.TimeInput.time = null; 

	$scope.t = function(){
		return $scope.TimeInput.distance > 0 && $scope.TimeInput.speed > 0 && $scope.TimeInput.time == null
	}

	$scope.d = function(){
		return $scope.TimeInput.time > 0 && $scope.TimeInput.speed > 0 && $scope.TimeInput.distance == null
	}

	$scope.s = function(){
		return $scope.TimeInput.distance > 0 && $scope.TimeInput.time > 0 && $scope.TimeInput.speed == null
	}

	// 	$scope.postRequest = function() {
// 		$scope.data = $scope.item
// 		console.log('item = '+$scope.data)
// 		$http.post("http://localhost:8080/create-order", '{"items":[{"name": "h", "id": 0}]}').then(
// 				function successCallback(response) {
// 					console.log("Successfully POST-ed data")
// 				}, 
// 				function errorCallback(response) {
// 					console.log("post-ing of data failed.")
// 				}
// 			)
// 	}
	
	$scope.doCalculation = function() {
		$http.post("http://localhost:8080/calculate", $scope.TimeInput).then(
			
			function successCallback(response) {
				console.log("jay")
				console.log(response)
				$scope.result = response
			}, 
			function errorCallback(response) {
				console.log("posting of data failed.")
			}
		)
	} 

})
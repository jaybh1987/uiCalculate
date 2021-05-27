
var app = angular.module('plunker', ['ui.router']); 


app.config(['$stateProvider', 
function($stateProvider){
	$stateProvider
	.state("timecal", {
		url:'/timecal', 
		templateUrl: 'timecal.html', 
		controller: 'timecontroller'
	})
	.state("percal", {
		url:'/percal', 
		templateUrl: 'percal.html', 
		controller: 'percentcontroller'
	})
	.state("areacal", {
		url:'/areacal', 
		templateUrl: 'areacal.html', 
		controller: 'areacontroller'
	})
}])

app.controller('Mainctrl', function($scope, $location){})

app.controller('timecontroller', function($scope, $http){
	$scope.val = "Time Calculator"

	$scope.TimeInput = {}
	$scope.TimeInput.speed = null; 
	$scope.TimeInput.distance = null; 
	$scope.TimeInput.time = null; 

	

	if($scope.TimeInput.speed == 0) $scope.TimeInput.distance = 10 
	

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

app.controller('areacontroller', function($scope){
	$scope.val = "Area Calculator"
})

app.controller('percentcontroller', function($scope){
	$scope.val = "Percentage Calculator"
})


// var testApp = angular.module("testApp", []); 

// testApp.controller("testController", function($scope, $http){

// 	$scope.home = "call http://localhost:8080/hello"

// 	$scope.item = {
// 		name: "", 
// 		id:0
// 	}

// 	$scope.getRequest = function() {

// 		console.log("I've been pressed!")

// 		$http.get('http://localhost:8080/hello').then(
// 			function successCallback(response) {
// 				$scope.response = response; 
// 			}, 
// 			function errorCallback(response) {
// 				console.log("unable to perform get request.")
// 			}
// 		)
// 	}

// 	$scope.getItem = function() {
// 		$http.get('http://localhost:8080/item/0').then(
// 			function successCallback(response) {
// 				$scope.response = response; 
// 			},
// 			function errorCalback(response) {
// 				console.log("unable to perform get request.")
// 			}
// 		)
// 	}

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
// })
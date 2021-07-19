app.config(['$stateProvider', 
function($stateProvider){
	$stateProvider
	.state("timecal", {
		url:'/timecal', 
		templateUrl: '/views/timecal.html', 
		controller: 'timecontroller'
	})
	.state("percal", {
		url:'/percal', 
		templateUrl: '/views/percal.html', 
		controller: 'percentcontroller'
	})
	.state("cpucal",  {
		url:'/cpu', 
		templateUrl: '/views/mycpu.html', 
		controller: 'mycpuController'
	})
}])
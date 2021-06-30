
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
	.state("areacal", {
		url:'/areacal', 
		templateUrl: '/views/areacal.html', 
		controller: 'areacontroller'
	})
	.state("charcal", {
		url:'/chartcal', 
		templateUrl: '/views/chartcal.html', 
		controller: 'chartcontroller'
	})
}])
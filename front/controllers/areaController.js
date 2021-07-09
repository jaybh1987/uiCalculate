app.controller('areacontroller', function($scope){
	$scope.val = "Area Calculator"  
	$scope.msg = ""

	Array.prototype.enqueue = function(val) {
		if(this.length === this.queueLengthIs) {

			this.shift(val)
			this.push(val) 

		} else {
			this.push(val)
		}
	}

	Array.prototype.setQueueLength = function(val ) {
		this.queueLengthIs = val
	}
	
	let q = new Array() 
	q.setQueueLength(5) 
	var count = 0

	// setInterval(
	// 	function() {
	// 		q.enqueue([count+=1, count+=2])
	// 		console.log(q)
	// 		drawChart()
	// 	}, 2000
	// )


/**
 * 
 * 
 * 
 * 
 * 
 */

	
// 	google.charts.load('current', {'packages':['line']});
// 	google.charts.setOnLoadCallback(drawChart);

// 	function drawChart() {

// 		var data = new google.visualization.DataTable();
// 		data.addColumn('number', 'Day');
// 		data.addColumn('number', 'Guardians of the Galaxy');
		
// 		data.addRows(q);

// 		var options = {
// 		chart: {
// 			title: 'Box Office Earnings in First Two Weeks of Opening',
// 			subtitle: 'in millions of dollars (USD)'
// 		},
// 		width: 900,
// 		height: 500,
// 		axes: {
// 			x: {
// 			0: {side: 'top'}
// 			}
// 		}
// 		};

// 	var chart = new google.charts.Line(document.getElementById('line_top_x'));

// 	chart.draw(data, google.charts.Line.convertOptions(options));
//   }


let socket = new WebSocket("ws://localhost:8181/greeter");


socket.onopen = function(e) {
	alert("[open] Connection established");
	alert("Sending to server");
	
	};


	socket.onerror = function(error) {
		alert(`[error] ${error.message}`);
	};


	socket.onmessage = function(event) {
		alert(`[message] Data received from server: ${event.data}`);
  };

$scope.sendMsg = function() {

	socket.send($scope.msg);
		// socket.onclose = function(event) {
		// 	if (event.wasClean) {
		// 		alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
		// 	} else {
		// 		// e.g. server process killed or network down
		// 		// event.code is usually 1006 in this case
		// 		alert('[close] Connection died');
		// 	}
		// };
}


})



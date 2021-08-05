app.controller('mycpuController', function($scope, $http){
	$scope.val = "mycpuController" 


    $scope.mygraph = {
        columns: ['', 'Usage', 'Swap Memory'],
        data: [['', 'Usage', 'Swap Memory']]
    }



    Array.prototype.enqueue = function(val){
        if(this.length === this.queueLengthIs){
            this.shift()
            this.push(val)
        }else{
            this.push(val)
        }
        return this
    }
    Array.prototype.setQueueLength = function(val){
        this.queueLengthIs = val
    }
    
    let queue = new Array()
    queue.setQueueLength(15)
    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable($scope.mygraph.data);

        var options = {
          title: 'Live CPU Usage',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      } 

        /**
         * class in backend is as follows 
         * case class Graph(cpuLoad: String, freeMem: String, freeSwap: String)
         */




        $scope.msg = {} 
        var handlecallBack = function(msg) {
            $scope.$apply(function() {
                $scope.msg = JSON.parse(msg.data) 
                
                console.log('msg received', $scope.msg)
                let c = parseInt($scope.msg.cpuLoad) 
                let d = parseInt($scope.msg.freeMem)
                // console.log(d)
                // queue.enqueue(['', 'Sales', 'Expenses'])
                queue.enqueue(['', c, d])
                $scope.mygraph.data = [$scope.mygraph.columns, ...queue]
                // console.log($scope.mygraph.data)
                drawChart()
            })
        } 
        var source = new EventSource('http://localhost:8181/events') 

        source.addEventListener('message', handlecallBack, false)
    
})
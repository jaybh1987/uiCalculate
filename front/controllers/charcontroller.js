
app.controller('chartcontroller', function($scope){
	
    var p = (msg, d) => console.log(msg, d)
    
    var arr = []
    var counter = 0


    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    
    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    // setInterval(
    //     function() {
    //         console.log('counter', counter)
    //         console.log(arr)
    //         if(arr.length == 6) { 
                
    //             removeData(myChart)
    //         } else {            
    //             addData(myChart, 'Looping tension', arr.push(counter = counter+1))
    //         }
    //     },
    //     2000
    // )



    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'], 
        datasets: [{
            label: 'Looping tension', 
            data: arr, 
            fill: false, 
            borderColor: 'rgp(75,192,192)'
        }]
    }
    
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

})
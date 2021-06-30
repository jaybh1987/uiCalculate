
app.controller('chartcontroller', function($scope){
	
    var p = (msg, d) => console.log(msg, d)
    
    var arr = []
    var counter = 0

    setInterval(
        function() {
            console.log('counter', counter)
            console.log(arr)
            if(arr.length == 6) {
                arr = arr.slice(1)
            } else {
                arr.push(counter = counter+1)
            }
        },
        2000
    )



    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'], 
        datasets: [{
            label: 'Looping tension', 
            data: [10, 12, 3,45, 34, 23, 56], 
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
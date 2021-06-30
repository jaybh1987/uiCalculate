// let socket = new WebSocket("ws://localhost:8181/greeter")

// socket.onopen = function(e) {
//     alert("[open] Connection Established") 
//     alert("Sending to server") 
//     socket.send("10,000")
// }

// socket.onmessage = function(event) {
//     alert(`[message] Data received from server : ${event.data}`)
// }

// socket.onclose = function(event) {

//     if(event.wasClean) {
//         alert(`[close] Connection closed cleanly, code= ${event.code} reason = ${event.reason} `)
//     } else {
//         alert('[close] Connection died')
//     }
// }


// socket.onerror = function(error) {

//     alert(`[error] ${error.message}`)
// }
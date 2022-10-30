
var udp = require('dgram');
var calculadora = require( "../calculadora/calculadora.js");

let sockets=[]
let server = udp.createSocket('udp4');


function broadCastMessage(port, msg) {
    sockets.forEach(x => {
        if (x !== port) {
            server.send(msg, x, 'localhost');
        }
    });
}



server.on('message', (msg, info) => {
    if (!sockets.includes(info.port)) sockets.push(info.port)
    
    let mensagem= msg.toString();
    let result = calculadora(mensagem);
    server.send(result.toString(), info.port, 'localhost');
   
});

server.on('close',function(){
    broadCastMessage(2222, "server closed");
    console.log('Socket is closed !');
});

server.bind(2222);




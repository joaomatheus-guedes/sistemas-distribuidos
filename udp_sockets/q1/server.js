
var udp = require('dgram');

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
    broadCastMessage(info.port, msg);
});

server.on('close',function(){
    broadCastMessage(2222, "server closed");
    console.log('Socket is closed !');
});

server.bind(2222);




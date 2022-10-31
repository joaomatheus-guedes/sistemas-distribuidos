
const net = require('net');
const serializador = require( "../serializacao/serializador.js");

var calculadora = require( "../calculadora/calculadora.js");

const handleConnection = socket => {
   
    socket.on('end',  () => {
        console.log('finalizada')
    })
    
    socket.on('data', data => {

        let mensagem= data.toString();
        let result = calculadora(mensagem);
        socket.write(serializador.marshaller("resultado = " + result))
    })
    
}

const server = net.createServer(handleConnection)
server.listen(4001,'127.0.0.1')


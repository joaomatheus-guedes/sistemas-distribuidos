var udp = require('dgram');
const readline = require('readline')
const serializador = require( "../serializacao/serializador.js");

function startClient() {
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    let client = udp.createSocket('udp4');
    
    client.on('message', function (msg, info) {
        console.log("resultado = " + serializador.unmarshaller(msg))
    });


    rl.addListener('line', line => {
            client.send(serializador.marshaller(line), 2222, 'localhost')
    })

}


startClient()
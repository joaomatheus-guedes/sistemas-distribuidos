var udp = require('dgram');
const readline = require('readline')

function startClient() {
   
    
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    let client = udp.createSocket('udp4');
    
    client.on('message', function (msg, info) {
        console.log("resultado = " + msg.toString())
    });


    rl.addListener('line', line => {
            client.send(line, 2222, 'localhost')
    })

}


startClient()
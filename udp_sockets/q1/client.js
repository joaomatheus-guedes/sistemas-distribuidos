var udp = require('dgram');
const readline = require('readline')

function startClient() {
    console.log("Qual o seu nome?")
    let name = null;
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdount
    })


    var client = udp.createSocket('udp4');


    client.on('message', function (msg, info) {
        JSON.parse(msg.toString())
       // console.log(msg.toString())
        if( msg.nome !== name) console.log(msg.toString());
        //console.log(msg.toString())
    });


    rl.addListener('line', line => {
        
        
        if (name == null) {

            //client.send(line, 2222, 'localhost')
            name = line
        }
        else{
            
        mensagemJSON = JSON.stringify({
            nome: name,
            mensagem: line });
        
            client.send(mensagemJSON, 2222, 'localhost')
        }
        
        
    })

}


startClient()
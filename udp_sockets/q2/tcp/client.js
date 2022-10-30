const net = require('net')
const readline = require('readline')

const client = new net.Socket()

const rl = readline.createInterface({

    input:process.stdin,
    output:process.stdount
})

client.connect(4001,'127.0.0.1',()=>{

    console.log("Calculadora iniciada")
    console.log("Insira os 2 números e em seguida a operação. \n Exemplos: \n 31- \n 42+ \n 32/ \n 32*")
    
    client.on('data', data => {
        console.log(data.toString())
    })

    rl.addListener('line', line => {
        client.write(line)
    })
})
const net = require('net')
const readline = require('readline')

const client = new net.Socket()

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdount
})

client.connect(4001,'127.0.0.1',()=>{

    console.log('conectado')

    client.on('data', data => {
        console.log(data.toString())
    })

    client.on('connect',  () => {
        console.log("Conexão iniciada.")
        client.write("Digite seu nome")
    })

    rl.addListener('line', line => {
        client.write(line)
    })
})
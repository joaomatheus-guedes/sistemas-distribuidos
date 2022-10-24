
const net = require('net');
const readline = require('readline')


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdount
})

const handleConnection = socket => {
    
    var userName=null;

    socket.on('end',  () => {
        console.log('tchau')
    })
    
    socket.on('data', data => {
        
        if(userName==null){
            userName=data.toString()
            socket.write("Chat iniciado")
        }
        else{
        console.log(userName+'= ' +data.toString())
        }
    })

    rl.addListener('line', line => {
        socket.write("servidor=" + line)
    })
}

const server = net.createServer(handleConnection)
server.listen(4000,'127.0.0.1')


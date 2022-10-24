
const net = require('net');

let sockets=[]

const handleConnection = socket => {
    
    var userName=null;
    sockets.push(socket)

    socket.on('end',  () => {
       sockets = sockets.filter(x => x == socket)
       messaga=`${userName} deixou o chat.`
       sockets.forEach(x => { 
        if(x != socket){
            x.write(message)
        }
        
    })

    })
   
    socket.on('data', data => {
        
        if(userName==null){
            userName=data.toString()
            socket.write("Chat iniciado")
           
            console.log(userName)
        }
        else{

            message= `${new Date().toString()} - ${userName} =  ${data.toString()}`
            
            sockets.forEach(x => { 
                if(x != socket){
                    x.write(message)
                }
                
            })
            console.log(message)
        }
    })


    
}

const server = net.createServer(handleConnection)
server.listen(4001,'127.0.0.1')


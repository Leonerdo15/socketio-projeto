
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('joinRoom', (data) => {
        console.log(data)
        socket.join(data.um_gr_id)
        io.emit('message', data );
    })

    // socket.on('message', (message) =>     {
    //     console.log(message);
    //     io.emit('message', `${socket.id.substr(0,2)} said ${message}` );
    // });
});

http.listen(8081, () => console.log('listening on http://localhost:8081') );


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 

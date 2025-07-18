import { Server, Socket } from "socket.io";

const io=new Server(8000,{
    cors: true,
});

const emailToSocketIdMap=new Map();
const socktIdToEmailMap=new Map();

io.on("connection",socket=>{
    console.log('Socket Connected',socket.id)
    socket.on('room:join', (data)=>{
        const {email,room}=data;
        emailToSocketIdMap.set(email,socket.id);
        socktIdToEmailMap.set(socket.id,email);
        io.to(room).emit('user:joined',{email, id:socket.id})
        socket.join(room);
        io.to(socket.id).emit('room:join',data);
    })

    socket.on("user:call", ({to,offer})=>{
        io.to(to).emit('incoming:call',{from:socket.id, offer})
    })

    socket.on("call:accepted",({to: from,ans})=>{
        io.to(to).emit("call:accepted",{from:socket.id, ans})
    })

    socket.on('')
})
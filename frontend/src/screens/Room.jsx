import React,{useCallback, useEffect, useState} from "react";
import { useSocket } from "../context/SocketProvider";

const RoomPage=()=>{
    const [remoteSocketId,setRemoteSocketId]=useState();
    const socket=useSocket();

    const handleUserJoined=useCallback((email,id)=>{
        console.log(`Email ${email} joined`);
        setRemoteSocketId(id);
    })

    useEffect(()=>{
        socket.on('user:joined',handleUserJoined)
        return ()=>{
            socket.off('user:joined',handleUserJoined)
        }
    },[socket,handleUserJoined])


    return(
        <div>
            <h1>ROOM JOINED</h1>
            <h4>
                {remoteSocketId? "Connected":"Empty"}
            </h4>
        </div>
    )
}

export default RoomPage;
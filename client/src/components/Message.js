import React, { useState } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
import { useParams } from "react-router-dom";

const Message = ({ user }) => {
    const {chatId, name} = useParams()

    return (
        <div>
             <Chat socket={socket} name = {name} user={user} room={chatId} />
        </div>
    )
}

export default Message;
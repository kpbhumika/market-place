import React, { useState } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
import { useParams } from "react-router-dom";

const Message = ({ user }) => {
    const {chatId, name} = useParams()

    // const [room, setRoom] = useState("");
    // const [showChat, setShowChat] = useState(false);

    // const startChat = () => {
    //     if (room !== "") {
    //         socket.emit("join_room", room);
    //         setShowChat(true);
    //     }
    // };

    // return (
    //     <div className="App">
    //         {!showChat ? (
    //             <div className="joinChatContainer">
    //                 <h3>Join A Chat</h3>
    //                 {/* <input
    //                     type="text"
    //                     placeholder="Room ID..."
    //                     onChange={(event) => {
    //                         setRoom(event.target.value);
    //                     }}
    //                 /> */}
    //                 <button onClick={startChat}>Start Chat</button>
    //             </div>
    //         ) : (
    //             <Chat socket={socket} user={user} room={room} />
    //         )}
    //     </div>
    // );

    return (
        <div>
             <Chat socket={socket} name = {name} user={user} room={chatId} />
        </div>
    )
}

export default Message;
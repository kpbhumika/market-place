import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import getMessages from "../apiClient/getMessages";
import postMessages from "../apiClient/postMessages";


let host="http://localhost:3001"
if(!window.location.host.includes("localhost")){
    host="https://market-mingle-c1e74b26ea17.herokuapp.com"
}

const socket = io.connect(host);

const Message = ({ user }) => {
    const { chatId, chatName } = useParams()
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket.emit("join_room", chatId)
        getMessages(chatId).then((messages) => {
            setMessageList(messages);
        });
    }, [chatId]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                chatId: chatId,
                author: user.firstName,
                text: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes() +
                    ":" +
                    new Date(Date.now()).getSeconds(),
            };
            postMessages(messageData)
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {

        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="message-box grid-x grid-margin-x">
            <div className="chat-window cell small-12 large-4">
                <div className="chat-header">
                    <p>{chatName}</p>
                </div>
                <div className="chat-body">
                    <ScrollToBottom className="message-container">
                        {messageList.map((messageContent) => {
                            return (
                                <div
                                    className="message"
                                    id={user.firstName === messageContent.author ? "you" : "other"}
                                >
                                    <div>
                                        <div className="message-content">
                                            <p>{messageContent.text}</p>
                                        </div>
                                        <div className="message-meta">
                                            <p id="time">{messageContent.time}</p>
                                            <p id="author">{messageContent.author}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ScrollToBottom>
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        value={currentMessage}
                        placeholder="Hey..."
                        onChange={(event) => {
                            setCurrentMessage(event.target.value);
                        }}
                        onKeyPress={(event) => {
                            event.key === "Enter" && sendMessage();
                        }}
                    />
                    <button onClick={sendMessage}>&#9658;</button>
                </div>
            </div>
            <div className=" message-image cell small-12 large-8">
                <img src="https://img.freepik.com/free-icon/chat_318-182845.jpg" alt="External Image" />
            </div>
        </div>

    );
}

export default Message;
import React, { useState, useEffect } from "react";
import getUserChats from "../apiClient/getUserChats";
import { Link } from "react-router-dom";

const UserChat = () => {
    const [userChats, setUserChats] = useState([]);

    useEffect(() => {
        getUserChats().then((chats) => {
            setUserChats(chats);
        });
    }, []);

    const userChatsList = userChats.map((chat) => {
        let chatName;
        if (chat.currentUserIs === "buyer") {
            chatName = chat.seller.firstName;
        } else {
            chatName = chat.buyer.firstName;
        }
        return (
            <li key={chat.id}>
                <Link to={`message/${chatName}/${chat.id}`}>{chatName}</Link>
            </li>
        );
    });

    return (
        <div className="user-chat-container">
            <h1 className="chat-header">Chats</h1>
            <ul className="user-chats-list">
                <div className="grid-x grid-margin-x">
                    <div className="cell small-12 large-8">
                    {userChatsList.length == 0 ? <h5>You don't have any chats.</h5> : (
                        {userChatsList})}
                    </div>
                    <div className=" chat-image cell small-12 large-4">
                        <img src="https://www.vhv.rs/dpng/d/53-530391_messages-icon-png-transparent-png.png" alt="External Image" />
                    </div>
                </div>

            </ul>
        </div>
    );
}

export default UserChat;

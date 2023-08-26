import React, { useState, useEffect } from "react";
import getUserChats from "../apiClient/getUserChats";
import { Link } from "react-router-dom";

const UserChat = () => {

    const [userChats, setUserChats] = useState([])

    useEffect(() => {
        getUserChats().then((chats) => {
            console.log(chats)
            setUserChats(chats)
        })
    }, [])

    const userChatsList = userChats.map((chat) => {
        let chatName
        if (chat.currentUserIs === "buyer") {
            chatName = chat.seller.firstName
        } else {
            chatName = chat.buyer.firstName
        }
        return (
            <li>
                <Link to={`message/${chatName}/${chat.id}`}>{chatName}</Link>
            </li>
        )
    });

    return (
        <>
            <h1>Chats</h1>
            <ul className="user-chats">
                {userChatsList}
            </ul>
        </>

    )
}

export default UserChat
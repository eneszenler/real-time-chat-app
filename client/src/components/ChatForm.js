import React, { useState } from 'react'
import styles from "./styles.module.css"
import { sendMessage } from '../socketApi'
import { useChat } from '../context/ChatContext'

function ChatForm() {
    const [message, setMessage] = useState("")

    const { setMessages } = useChat();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message !== "") {
            console.log(message);

            setMessages((prevState) => [...prevState, { message, fromMe: true }])
            sendMessage(message);
            setMessage("");
        }
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Type a message' className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
                <button><i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default ChatForm
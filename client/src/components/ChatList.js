import React from 'react'
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem';
import styles from "./styles.module.css"
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {
    const { messages } = useChat();

    console.log(messages);
    return (
        <div className={styles.chatlist}>
            <ScrollableFeed>
                {
                    messages.map((item, key) =>
                    (<ChatItem key={key} item={item} />
                    ))
                }
            </ScrollableFeed>
        </div>
    )
}

export default ChatList
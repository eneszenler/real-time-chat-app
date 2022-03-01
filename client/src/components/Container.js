import { useEffect } from 'react'
import "../App.css"

import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useChat } from '../context/ChatContext';

import { init, subscribeChat, subscribeInitialMessages } from '../socketApi'
import User from './User';

function Container() {
    const { setMessages } = useChat();

    useEffect(() => {
        init()

        // subscribeInitialMessages((messages) => setMessages(messages))

        subscribeChat((message) => {
            setMessages((prevState) =>
                [...prevState, { message }]
            )
        });
    }, [])


    return (
        <div className='container'>
            <div className="row">
                <div className='container-user'>
                    <User />
                </div>
                <div className="container-list">
                    <ChatList />
                </div>
                <div className='container-form'>
                    <ChatForm />
                </div>
            </div>
        </div>
    )
}

export default Container
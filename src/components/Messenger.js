import React, { useEffect, useState } from "react";
import { addDoc, collection, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp, } from 'firebase/firestore'
import app from '../config/config';
import '../styles/messenger.css'

function Messenger() {
    let [messages, setMessages] = useState([]);

    async function sendMessage(event) {
        event.preventDefault();
        try {
            await addDoc(collection(getFirestore(app), 'messages'), {
                name: 'Brandon',
                text: event.target.querySelector('.message-input').value,
                timestamp: serverTimestamp()
            });
            loadMessages();
        } catch(error) {
            console.error('Error writing new message to Firebase Database', error)
        };
    };

    async function loadMessages() {
        // Create the query to load the last 12 messages and listen for new ones.
        const recentMessagesQuery = query(collection(getFirestore(app), 'messages'), orderBy('timestamp', 'desc'), limit(12));
        // Start listening to the query.
        onSnapshot(recentMessagesQuery, function(snapshot) {
            let meet = [];
            snapshot.forEach((doc) => {
                meet.push(doc._document.data.value.mapValue.fields.text.stringValue);
            });
            setMessages(meet);
      });
    }

    return (
        <div className="content-container">
            <div className="messenger-container">
                <div className="chat-container">
                    {messages.map((message) => {return <div key={message}>{message}</div>})}
                </div>
                <form className="input-container" onSubmit={sendMessage}>
                    <input type="text" className="message-input" placeholder="Aa"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        
    )
};

export default Messenger;
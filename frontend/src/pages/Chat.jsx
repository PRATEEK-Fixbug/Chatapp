import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { sender: 'You', content: inputMessage }]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                <strong>{message.sender}: </strong>{message.content}
              </div>
            ))}
          </div>
          <div className="message-form">
            <input 
              type="text" 
              value={inputMessage} 
              onChange={(e) => setInputMessage(e.target.value)} 
              placeholder="Type your message..." 
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

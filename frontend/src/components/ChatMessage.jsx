import React from 'react';

const ChatMessage = ({ message, isSender }) => (
  <div className={`chat-message ${isSender ? 'sender' : 'receiver'}`}>
    {message}
  </div>
);

export default ChatMessage;

// ControlPanel.js
import React, { useState } from 'react';
import axios from 'axios';

function ControlPanel() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    axios.post('/send-message', { message })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      <label htmlFor="message-input">Message:</label>
      <input
        id="message-input"
        type="text"
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ControlPanel;

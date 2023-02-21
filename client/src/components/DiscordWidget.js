// DiscordWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DiscordWidget() {
  const [botStatus, setBotStatus] = useState('');

  useEffect(() => {
    axios.get('/bot-status')
      .then(response => {
        setBotStatus(response.data.status);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="discord-widget">
      <h2>Discord Widget</h2>
      <p>Bot Status: {botStatus}</p>
    </div>
  );
}

export default DiscordWidget;

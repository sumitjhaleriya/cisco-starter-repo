import React, { useEffect, useState } from 'react';
import WebSocket from 'ws';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:55455');

    websocket.onopen = () => {
      console.log('WebSocket connected');
    };

    websocket.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data);
      const currentTimestamp = Date.now();
      const currentLatency = currentTimestamp - packetTimestamp;
      setLatency(currentLatency);
    };

    websocket.onclose = () => {
      console.log('WebSocket closed');
    };

    setWs(websocket);

    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency:</h2>
      <p>{latency !== null ? `${latency} ms` : 'Waiting for packets...'}</p>
    </div>
  );
};

export default PacketLatency;

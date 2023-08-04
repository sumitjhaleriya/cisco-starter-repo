import React from 'react';
import Container from './Container';
import PublicIPAddress from './PublicIPAddress';
import PacketLatency from './PacketLatency';

const App = () => {
  return (
    <div>
      <Container title="IPv4 Address">
        <PublicIPAddress ipv6={false} />
      </Container>

      <Container title="IPv6 Address">
        <PublicIPAddress ipv6={true} />
      </Container>

      <Container title="Packet Latency">
        <PacketLatency />
      </Container>
    </div>
  );
};

export default App;

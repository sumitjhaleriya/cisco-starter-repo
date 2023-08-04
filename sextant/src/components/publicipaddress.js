import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicIPAddress = ({ ipv6 }) => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const ipAddressType = ipv6 ? 'ipv6' : 'ipv4';
    const ipifyAPI = `https://api.ipify.org?format=json&${ipAddressType}=true`;

    axios
      .get(ipifyAPI)
      .then((response) => {
        setIPAddress(response.data[ipAddressType]);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipv6]);

  return (
    <div>
      <h2>{ipv6 ? 'Public IPv6 Address:' : 'Public IPv4 Address:'}</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default PublicIPAddress;

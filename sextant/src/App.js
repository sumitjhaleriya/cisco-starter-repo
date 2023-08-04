 // import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards';
import Exhibit from './components/exhibit';
import List from './components/itemlist';
import React from 'react';

import PublicIPAddress from './components/publicipaddress';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <Exhibit>
        Components List
      </Exhibit>
      <Cards />
      <List />
      <div title="IPv4 Address">
        <PublicIPAddress ipv6={false} />
      </div>

      <div title="IPv6 Address">
        <PublicIPAddress ipv6={true} />
      </div> 
    </div>
  );
}

export default App;

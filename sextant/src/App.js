 // import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards';
import Exhibit from './components/exhibit';
import List from './components/itemlist';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <Exhibit>
        Components List
      </Exhibit>
      <Cards />
      <List />
    </div>
  );
}

export default App;

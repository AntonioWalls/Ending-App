import logo from './modongo.jpg';
import './App.css';
import { Button, Form} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form.Label>Introduce texto</Form.Label>
        <Form.Control type="text"></Form.Control>
        <button>Guardar</button>
      </header>
    </div>
  );
}

export default App;

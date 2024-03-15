import logo from './modongo.jpg';
import './App.css';
import { Button, Form} from 'react-bootstrap';
import Primer_forms from './primer_forms.js';
import { useState } from 'react';

function App() {
  const [carroNombre, setCarro] = useState("Nombre");
  return(
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <Primer_forms
         carroNombre="Altima"/>
      </header>
    </div>
  )
}
export default App;
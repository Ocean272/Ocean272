//import logo from './logo.svg';
import { useState } from 'react';
import lightOn from './assets/images/light-on.png';
import lightOff from './assets/images/light-off.png';
import './App.css';

function App() {

    const [toggle, setToggle] = useState(false);

    const toggleFunc = () => {
      setToggle(!toggle)
    }
      
    console.log("Try toggle");

  return (
    <div className="App">
      <img src={toggle ? lightOff : lightOn} />
      <button onClick={ toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState([]);

  const loadData = async () => {
    const response = await axios.get('http://localhost:3000/');
    setGreeting(response.data.text);
    console.log(response)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://github.com/microverseinc/readme-template/blob/master/murple_logo.png?raw=true" className="App-logo" alt="logo" />
        <h2>
        {greeting}
        </h2>
      </header>
    </div>
  );
}

export default App;

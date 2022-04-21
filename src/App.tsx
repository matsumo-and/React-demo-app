import React from 'react';
import logo from './logo.svg';
import './App.css';

const test = String("this is test.");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <form>
          <label>
            Name:
            <input type="number" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
        Hello,World! {test} {test.length}
        </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React more at
        </a>
      </header>
    </div>
  );
}

export default App;

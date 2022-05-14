import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {modelSelector} from './ModelAtom';

let test:string = "";

/*
export const withResult = <T, A extends any[], E extends Error>(
  fn: (...args: A) => Promise<T>,
  ) => async(...args: A): Promise<Result<T, E>> => {
  try{
    return new Ok(await fn(...args));
  }catch(error){
    if (error instanceof Error){
      return new Err(error as E);
    }
  }
}
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <Testapp/>
        <ValueWithOnChange/>
        </div>
        <form>
          <label>
            Name:
            <input type="number" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <textarea>
          this is sample
        </textarea>
        <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
        </select>
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
const ValueWithOnChange: React.FC = () => {
  const [str, setStr] = useState("0123");
  return (
    <div>
      <label>value: {test}</label>
      <input
        type="text"
        value={str}
        onChange={event =>{
          setStr(event.target.value);
          test = str;
        }}
      />
    </div>
  );
};

function Testapp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSend = (e:any) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '2em' }}>
      <h1>useStateでフォーム</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>
            メールアドレス:
            <input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            パスワード：
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
        type="submit">
          Submit
          </button>
      </form>
    </div>
  );
}

export default App;

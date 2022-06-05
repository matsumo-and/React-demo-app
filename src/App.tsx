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
          {(() => {
          const items = [];
          for (let i = 0; i < 11; i++) {
              items.push(<img src={logo} className="App-logo" alt="logo" />)
          }
          return items;
          })()}
        </div>
        <div>
        <Testapp/>
        <ValueWithOnChange/>
        <TestForm/>
        <TextInput />
        <input type="text"/>
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

const TextInput: React.FunctionComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleCheck = ():void => {
    if (inputRef.current) inputRef.current.focus();
  };

  return(
    <div>
      <input type="text" ref = {inputRef} />
      <input type="button" value = "Focus" onClick={handleCheck} />
    </div>
  );
};

function TestForm(){

  return (
    <>
      <div>
      <textarea>
        this is sample
      </textarea>
      </div>
      <div>
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      </div>
    </>
  );

}

const ValueWithOnChange: React.FC = () => {
  const [str, setStr] = useState("0123");
  return (
    <div>
      <p>
      <label>value: {test}</label>
      </p>
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
  const [profit, setProfit] = useState('');
  const handleSend = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profit);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '2em' }}>
      <h1>useStateでフォーム</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>
            収支：
            <input
              name="profit"
              type="number"
              onChange={(e) => setProfit(e.target.value)}
            />
          </label>
        </div>
        <button
        type="submit">
          Calculate
          </button>
      </form>
    </div>
  );
}

export default App;

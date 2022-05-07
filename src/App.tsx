import React from 'react';
import logo from './logo.svg';
import './App.css';

const test = String("this is test.");

type Result<T,E extends Error> = Ok<T,E> | Err<T,E>;

export class Ok<T,E extends Error> {
  constructor(readonly val:T){}
  isOk = (): this is Ok<T,E> => true;
  isErr = (): this is Err<T,E> => false;
}

export class Err<T,E extends Error> {
  constructor(readonly err:E){}
  isOk = (): this is Ok<T,E> => false;
  isErr = (): this is Err<T,E> => true;
}

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

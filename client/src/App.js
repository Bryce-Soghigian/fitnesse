import React,{useReducer} from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login'
import {GlobalContext} from './contexts/context.js'
import { reducer, initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state,"state in app")

  return (
  <GlobalContext.Provider
    value={{
      state,
      dispatch
    }}>
    <div className="App">
      <Route exact path="/" />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signin" />
      <Route exact path="/goals" />


    </div>
    </GlobalContext.Provider>

  );
}

export default App;

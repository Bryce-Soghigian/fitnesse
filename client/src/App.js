import React,{useReducer} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login'
import {GlobalContext} from './contexts/context.js'
import { reducer, initialState } from "./reducer";
import Register from './components/auth/Register'
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
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" />
      <Route exact path="/signin" component={Register} />
      <Route exact path="/goals" />


    </div>
    </GlobalContext.Provider>

  );
}

export default App;

import React, { createContext, useReducer } from 'react';
import './App.css';
import Event from './Event';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from './Create';
import { reducer, init } from './reducer';

export const globalContext = createContext();

function App() {


  const [context, dispatch] = useReducer(reducer, init);


  return (
    <div>
      <globalContext.Provider value={{ context, dispatch }}>
      <Router>
      <div>
        

        <Switch>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </globalContext.Provider>
    </div>
  );
}

export default App;

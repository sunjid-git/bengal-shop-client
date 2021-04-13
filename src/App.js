
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddEvents from './components/AddEvents/AddEvents';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import { createContext } from 'react';

import { useState } from 'react';

export const UserContext = createContext()

function App() {
 const [loggedInUser,setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
   <p>Name: {loggedInUser.name}</p>
    <Router>
      <Header></Header>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/orders">
          <Orders></Orders>
        </Route>

        <Route path="/deals">
          <AddEvents></AddEvents>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/login">
          
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

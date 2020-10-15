import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';

import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/:title">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/serviceList/:title'>
            <ServiceList></ServiceList>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;

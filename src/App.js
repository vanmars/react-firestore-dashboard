import React from 'react';
import './App.css';
import './firebase/config';
import Signup from './pages/Signup';
import Header from './Header';
import Profile from './pages/Profile';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { UserProvider } from './firebase/UserProvider';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='profile' componene={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

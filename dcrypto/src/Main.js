import React from 'react';
import {Route} from 'react-router-dom';

//Component Imports
import AppBar from './components/AppBar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

function Main() {
  return (
    <div className="App">
      <AppBar />
      <Route exact path='/' render={() => <Dashboard /> } /> 
      <Route path='/settings' render={() => <Settings /> } />
    </div>
  );
}

export default Main;
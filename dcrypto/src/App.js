import cc from 'cryptocompare';
import React from 'react';
import {Store} from './Store';
import {Route} from 'react-router-dom';

//Component Imports
import Main from './Main';
import LandingPage from './components/Authentication/LandingPage';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';


function App() {
  const {state, dispatch} = React.useContext(Store);
  const {loggedIn} = state;

  const fetchCoins = async() => {
    let coinList = (await cc.coinList());
    coinList = coinList.Data;
    dispatch({type:'COIN_LIST_UPDATE', payload:coinList});
  }

  React.useEffect(()=>{
    console.log("use effect")
    fetchCoins();
  },[])

  return (
    <div>
    <Route path='/login' render={() => <Login /> } />
    <Route path='/sign-up' render={() => <SignUp /> } />
    <Route path='/' render={()=>loggedIn ? <Main /> : <LandingPage />} />
    </div>
  );
}

export default App;

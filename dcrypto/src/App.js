import React from 'react';
import {Store} from './Store';
import {Route} from 'react-router-dom';
import cc from 'cryptocompare';

//Component Imports
import Main from './Main';
import LandingPage from './components/Authentication/LandingPage';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';


function App() {
  const {state, dispatch} = React.useContext(Store);
  const {loggedIn} = state;

  const fetchCoins = async() => {
    let coinList = await cc.coinList();
    const final = Object.keys(coinList.Data).map(coin => coinList.Data[coin]);
    dispatch({type:'COIN_LIST_UPDATE', payload: final});
  }

  React.useEffect(()=>{
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

import React from 'react'
export const Store = React.createContext(); //creates context object

const initialState = {
    loggedIn : true,
    selected:"dashboard",
    favorites:[],
    username:"",
    coins:[],
}

function reducer(state, action) {
    switch(action.type){
        default:
            return state;
        case('Change_Selected'):
            return {...state, selected:action.payload}
        case('COIN_LIST_UPDATE'):
            return {...state, coins: action.payload}
    }
}

export default function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch }; //creates an object from above statement that holds both the values
    return <Store.Provider value={value}>{props.children}</Store.Provider>
} 
// This will be the react component that will encapsulate the other components in the application. 
// It has an argument of props because that’s how we’ll get access to the other child components.
// This will be given to index.js to hold state
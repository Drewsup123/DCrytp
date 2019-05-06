import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import App from './App';
import StoreProvider from './Store';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>, document.getElementById('root')
);


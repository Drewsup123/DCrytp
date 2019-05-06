import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import App from './App';
import StoreProvider from './Store';
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>, document.getElementById('root')
);


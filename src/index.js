import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Memory from './services/Memory';

ReactDOM.render(
    <React.StrictMode>
        <Memory>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </Memory>
    </React.StrictMode>,
    document.getElementById('root')
);

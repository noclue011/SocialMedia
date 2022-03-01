import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
    // Wraps application in router to become multi-page
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
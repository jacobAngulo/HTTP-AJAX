import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

const WithRouter = withRouter(App)

ReactDOM.render(
<Router>
    <WithRouter />    
</Router>
, document.getElementById('root'));

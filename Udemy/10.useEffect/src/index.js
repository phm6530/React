import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import Auth from './store/auto-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Auth><App /></Auth>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

// 공급자 최상 컴포넌트에서 지정 
root.render(<Provider store={store}><App/></Provider>);

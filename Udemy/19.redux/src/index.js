import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/redux_slice'; // 정확한 경로로 수정하세요
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
     <App />
    </Provider>

);
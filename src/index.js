import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redux/store';
import { Provider } from 'react-redux';
import './index.css'

console.log("its working")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();

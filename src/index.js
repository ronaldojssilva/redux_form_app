import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import cfgStore from './store'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';


const store = cfgStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <div className='container'>
        <div className='row'>
          <App/>
        </div>
      </div>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

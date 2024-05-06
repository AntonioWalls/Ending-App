import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import store from '../src/redux/store/store';
import { Provider } from 'react-redux';
import Grid from './components/users/Grid';
import App from './components/users/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Grid />
    </React.StrictMode>
  </Provider>
);
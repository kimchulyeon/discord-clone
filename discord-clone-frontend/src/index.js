import React from 'react';
import App from './App';
import './assets/css/index.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

import history from '../src/custom/history';
import CustomRouter from './custom/CustomRouter';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </Provider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';

//* REDUX IMPORTS
// Uncomment to use within the app
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

import App from './App';
import '@/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

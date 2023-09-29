import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Nom035App from './Nom035App';
import './ui/styles/global.css';
import './ui/styles/inputs.css';
import './ui/styles/buttons.css';
import './ui/styles/cards.css';
import './ui/styles/headers.css';
import './ui/styles/forms.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nom035App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

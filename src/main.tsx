import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Nom035App from './Nom035App';
import './ui/css/global.css';
import './ui/css/inputs.css';
import './ui/css/buttons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nom035App />
    </BrowserRouter>
  </React.StrictMode>
);

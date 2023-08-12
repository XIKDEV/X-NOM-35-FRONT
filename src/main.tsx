import React from 'react';
import ReactDOM from 'react-dom/client';

// import Nom035app from './Nom035App.tsx';
import { LoginPage } from './auth/pages';

import './ui/css/global.css';
import './ui/css/inputs.css';
import './ui/css/buttons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);

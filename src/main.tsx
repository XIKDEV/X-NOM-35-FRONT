import React from 'react';
import ReactDOM from 'react-dom/client';

import './ui/css/global.css';
import './ui/css/inputs.css';
import './ui/css/buttons.css';

import { LayoutMainPage } from './layouts/pages';

import { EnterprisesPage } from './enterprises/pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutMainPage page={EnterprisesPage} />
  </React.StrictMode>
);

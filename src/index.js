import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';

import { RouterProvider } from 'react-router-dom';
import  router  from './routes/routesConfig.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


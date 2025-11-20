import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NojimaPFAPro from './NojimaPFAPro';

// Bootstrap the React application. Use React 18's new root API.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NojimaPFAPro />
  </React.StrictMode>
);

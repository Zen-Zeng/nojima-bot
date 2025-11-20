import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NojimaPFAPro from './NojimaPFAPro';
import { LanguageProvider } from './i18n/LanguageContext';

// Bootstrap the React application. Use React 18's new root API.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <NojimaPFAPro />
    </LanguageProvider>
  </React.StrictMode>
);

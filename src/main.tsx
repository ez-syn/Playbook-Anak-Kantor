import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App.tsx';
import { KeycapThemeProvider } from './context/KeycapThemeContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KeycapThemeProvider>
      <App />
    </KeycapThemeProvider>
  </StrictMode>,
);


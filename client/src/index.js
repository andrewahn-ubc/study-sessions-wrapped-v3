import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CoursesContextProvider } from './context/CoursesContextProvider.js';
import { SelectedContextProvider } from './context/SelectedContextProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoursesContextProvider>
      <SelectedContextProvider>
        <App />
      </SelectedContextProvider>
    </CoursesContextProvider>
  </React.StrictMode>
);


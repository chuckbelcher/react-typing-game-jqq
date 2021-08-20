import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ScoreProvider } from './context/scoreContext';


ReactDOM.render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


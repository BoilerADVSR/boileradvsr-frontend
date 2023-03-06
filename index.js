import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.js'

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
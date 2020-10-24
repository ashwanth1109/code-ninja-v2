import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.component';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
/**
 * TODO: Check if we need to check if env is development
 * import.meta.env.NODE_ENV === 'development
 * https://redux-toolkit.js.org/tutorials/advanced-tutorial#reviewing-the-starting-example-application
 */
if (import.meta.hot) {
  import.meta.hot.accept();
}

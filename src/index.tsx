import React from 'react';
import ReactDOM from 'react-dom';
import EntryPoint from './EntryPoint';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <EntryPoint />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
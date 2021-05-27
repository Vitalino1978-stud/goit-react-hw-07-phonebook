import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

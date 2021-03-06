import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './store/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);

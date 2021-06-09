import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './config/fbconfig'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),

    
  )
);

const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};


const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance
};

  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        rrfProps={{}}
        config={{}}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
        {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
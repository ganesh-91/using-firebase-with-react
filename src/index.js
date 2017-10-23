import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDFqxSjH5pJG4xwwM1BJ7Ng40lgVm495B0",
    authDomain: "fir-poc-12602.firebaseapp.com",
    databaseURL: "https://fir-poc-12602.firebaseio.com",
    projectId: "fir-poc-12602",
    storageBucket: "fir-poc-12602.appspot.com",
    messagingSenderId: "641558267156"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

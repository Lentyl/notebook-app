import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");

require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyALXpuBwuVqf-ZCK6t_7f66qCpYbk1aiaM",
  authDomain: "notebook-app-b683a.firebaseapp.com",
  databaseURL: "https://notebook-app-b683a.firebaseio.com",
  projectId: "notebook-app-b683a",
  storageBucket: "notebook-app-b683a.appspot.com",
  messagingSenderId: "449352979062",
  appId: "1:449352979062:web:8681be5a549eaad3810557",
  measurementId: "G-6RE4E24CKW"
});

firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

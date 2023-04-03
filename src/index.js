import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS2HnK0sXqJnpMMbjJ1h10lpmJPd2GD9Q",
  authDomain: "cart-project-c8d8c.firebaseapp.com",
  projectId: "cart-project-c8d8c",
  storageBucket: "cart-project-c8d8c.appspot.com",
  messagingSenderId: "778683712063",
  appId: "1:778683712063:web:685604989fb3aab8ba2e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

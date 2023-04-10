//latest version use imports like below
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS2HnK0sXqJnpMMbjJ1h10lpmJPd2GD9Q",
  authDomain: "cart-project-c8d8c.firebaseapp.com",
  projectId: "cart-project-c8d8c",
  storageBucket: "cart-project-c8d8c.appspot.com",
  messagingSenderId: "778683712063",
  appId: "1:778683712063:web:685604989fb3aab8ba2e8a",
};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();



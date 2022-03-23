import firebase from "firebase/app";
import "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKMnxW_uiABtS9Kp0vhlb8RZhHm0RlX-s",
    authDomain: "race-cats.firebaseapp.com",
    projectId: "race-cats",
    storageBucket: "race-cats.appspot.com",
    messagingSenderId: "517561103138",
    appId: "1:517561103138:web:a8277d4d294be900f26b7b",
    measurementId: "G-F0J5JJ11W7"
  };

  firebase.initializeApp(firebaseConfig);

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

    export default firebase;

  
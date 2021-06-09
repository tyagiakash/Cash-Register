import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCU1Oc51inkk3Ne5Y6U4P5FrGbHf3LxOU4",
  authDomain: "cash-register-60386.firebaseapp.com",
  projectId: "cash-register-60386",
  storageBucket: "cash-register-60386.appspot.com",
  messagingSenderId: "317801556589",
  appId: "1:317801556589:web:788ed0da7af71d6bdb2d64",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

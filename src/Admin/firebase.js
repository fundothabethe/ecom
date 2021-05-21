import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXchAlL2dGxrVlPQYQWdWf_o63c33rCV4",
  authDomain: "workecom-529bd.firebaseapp.com",
  projectId: "workecom-529bd",
  storageBucket: "workecom-529bd.appspot.com",
  messagingSenderId: "1020104845446",
  appId: "1:1020104845446:web:ee741938d032825ae08907",
  measurementId: "G-CFEZHMQ0F9",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage().ref();
const auth = firebase.auth();

export { auth, storage, db };

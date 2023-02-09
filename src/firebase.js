import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0_qt7pooTsTe-Lz4ynfZju8KF-nhyo0Q",
    authDomain: "twitter-clone-c3e8b.firebaseapp.com",
    projectId: "twitter-clone-c3e8b",
    storageBucket: "twitter-clone-c3e8b.appspot.com",
    messagingSenderId: "1065823873535",
    appId: "1:1065823873535:web:497a7cd92f7d4eaa9d9fca",
    measurementId: "G-C69N76ZT78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
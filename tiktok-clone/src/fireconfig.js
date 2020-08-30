import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBcy-Vy_m0EaIU_-65tNDik17w-bdh2zCM",
    authDomain: "tik-tok-clone-14fbf.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-14fbf.firebaseio.com",
    projectId: "tik-tok-clone-14fbf",
    storageBucket: "tik-tok-clone-14fbf.appspot.com",
    messagingSenderId: "1032531372084",
    appId: "1:1032531372084:web:9cf7d74d11022287c64261",
    measurementId: "G-Q1PZBD608T"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
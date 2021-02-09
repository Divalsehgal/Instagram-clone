import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCV_l9IXFkJU9zNLnb1Zn1P33kdvHWRRFU",
  authDomain: "instagram-clone-3578a.firebaseapp.com",
  databaseURL: "https://instagram-clone-3578a.firebaseio.com",
  projectId: "instagram-clone-3578a",
  storageBucket: "instagram-clone-3578a.appspot.com",
  messagingSenderId: "461585839082",
  appId: "1:461585839082:web:c55142a5c24325d52ab893",
  measurementId: "G-P788K4MPEF",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db,auth,storage};
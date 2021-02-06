import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCseaetAufb-fly766A1hXKxE4rzvLK3yA",
  authDomain: "snapchat-clone-dbfb3.firebaseapp.com",
  projectId: "snapchat-clone-dbfb3",
  storageBucket: "snapchat-clone-dbfb3.appspot.com",
  messagingSenderId: "907476084885",
  appId: "1:907476084885:web:c6eebfb8e6fec2907ad39c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

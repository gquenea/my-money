import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoEmtR52ldGSYoocUE7VuXXwK3xPvPjS4",
  authDomain: "mymoney-555.firebaseapp.com",
  projectId: "mymoney-555",
  storageBucket: "mymoney-555.appspot.com",
  messagingSenderId: "457776558594",
  appId: "1:457776558594:web:6572bfae2fcb98622d2d1b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };

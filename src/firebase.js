import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbnYBc_zkPqPwoQ6EZ6ge5eYOMhiravG4",
  authDomain: "git-flows.firebaseapp.com",
  projectId: "git-flows",
  storageBucket: "git-flows.appspot.com",
  messagingSenderId: "573313630457",
  appId: "1:573313630457:web:ad67305162492d18332228",
  measurementId: "G-YLHKX56XBT"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");

// export utils/refs
export { db, auth, usersCollection };

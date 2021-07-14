import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBH0LsljD67jGV0abDOeZ368tsoh9X0GrE",
  authDomain: "docs-dark.firebaseapp.com",
  projectId: "docs-dark",
  storageBucket: "docs-dark.appspot.com",
  messagingSenderId: "311932049190",
  appId: "1:311932049190:web:5441c84002bf7ceed153e7",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };

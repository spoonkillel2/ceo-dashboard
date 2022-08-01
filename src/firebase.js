import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyBTqU32-w-HUwfo3V8SjKCGjoJH0qmEg4k",
  authDomain: "ceo-dashboard-2008d.firebaseapp.com",
  databaseURL:
    "https://ceo-dashboard-2008d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ceo-dashboard-2008d",
  storageBucket: "ceo-dashboard-2008d.appspot.com",
  messagingSenderId: "138428389999",
  appId: "1:138428389999:web:51e5a216325309e1190b9a",
  measurementId: "G-QP39JK0QEW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { app, auth, logInWithEmailAndPassword, logout };

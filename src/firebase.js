import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseConfig from "./config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logOut = getAuth();
signOut(auth)
  .then(() => {
    // console.log("Sign-out successful.");
  })
  .catch((err) => {
    alert(err.message);
  });

export { auth, logIn, logOut };

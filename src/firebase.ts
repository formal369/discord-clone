// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYsSu6iqKAom0i0iv1BkwN-sLJYEHCeQ4",
  authDomain: "discord-clone-2feff.firebaseapp.com",
  projectId: "discord-clone-2feff",
  storageBucket: "discord-clone-2feff.appspot.com",
  messagingSenderId: "1096153602064",
  appId: "1:1096153602064:web:a14039719214c410edd295"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCl1D6BRu0aVSgSwKOl0KtjxuQQOPzLq8",
  authDomain: "board-fa04c.firebaseapp.com",
  projectId: "board-fa04c",
  storageBucket: "board-fa04c.appspot.com",
  messagingSenderId: "949256251408",
  appId: "1:949256251408:web:3d1276e6b97ea325fa4295",
  measurementId: "G-EPS9RKWYFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
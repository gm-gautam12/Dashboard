import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM_xvaGvoR8qEmVfMLtvMTuGC6BUo7uQ0",
  authDomain: "openinapp-a91e1.firebaseapp.com",
  projectId: "openinapp-a91e1",
  storageBucket: "openinapp-a91e1.appspot.com",
  messagingSenderId: "907135680595",
  appId: "1:907135680595:web:ed20336fbe90923ead86a6",
  measurementId: "G-E1BH51FRPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

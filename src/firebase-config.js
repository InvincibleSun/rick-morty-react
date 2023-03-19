import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

// web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBnEJ8fpu3tmS-AeBqr6llM2LAR_RzUJw",
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// initialize firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(firebaseAuth, provider).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const { email } = error.customData;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  });
}

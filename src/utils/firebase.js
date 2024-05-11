// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2183f80rDuJnqoEY0LDLQCSVI0_E2vVY",
  authDomain: "netflix-gpt-d7722.firebaseapp.com",
  projectId: "netflix-gpt-d7722",
  storageBucket: "netflix-gpt-d7722.appspot.com",
  messagingSenderId: "368671805820",
  appId: "1:368671805820:web:2d100a33ca1fb74dc2d4f9",
  measurementId: "G-Q9Y58SR14K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
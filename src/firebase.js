// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore}  from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt1C6mVN7QiV0xdYNWAiZO-tJzlxqS_Tg",
  authDomain: "crypto-galaxy-364614.firebaseapp.com",
  projectId: "crypto-galaxy-364614",
  storageBucket: "crypto-galaxy-364614.appspot.com",
  messagingSenderId: "130822631899",
  appId: "1:130822631899:web:c37f9d92519db075ccb7fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app)
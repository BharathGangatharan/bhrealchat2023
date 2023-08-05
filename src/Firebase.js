// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDG2qPxTRFxhDNEubysdEpV2i-jD8hm9cM",

  authDomain: "bhrealchat.firebaseapp.com",

  projectId: "bhrealchat",

  storageBucket: "bhrealchat.appspot.com",

  messagingSenderId: "126707095386",

  appId: "1:126707095386:web:43bf8f67bd34de0e69c563",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)

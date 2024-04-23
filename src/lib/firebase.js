import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-3576f.firebaseapp.com",
  projectId: "react-chat-3576f",
  storageBucket: "react-chat-3576f.appspot.com",
  messagingSenderId: "351177297208",
  appId: "1:351177297208:web:8e1f22784778159c2f05cd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

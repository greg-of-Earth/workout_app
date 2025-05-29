// firebase.ts
import { getApps, initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBCjgCO8yslkIyxVLfXUfUf3zVOYzLI2Ww",
  authDomain: "workout-app-9768a.firebaseapp.com",
  projectId: "workout-app-9768a",
  storageBucket: "workout-app-9768a.appspot.com",
  messagingSenderId: "302325885077",
  appId: "1:302325885077:web:9ba3cecfc7f2d1dda3139c",
  measurementId: "G-HDL97KY8ZZ"
};

// Initialize Firebase app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize auth and set persistence
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Firebase persistence error:', error);
});

// Firestore instance
const db = getFirestore(app);

export { app, auth, db };

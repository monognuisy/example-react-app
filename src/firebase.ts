import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
// import { firebaseConfig } from './.env';

export const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_APP_ID,

  measurementId: process.env.REACT_APP_MEASUREMENT_ID,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export {
  db, collection, getDocs, getDoc, addDoc, deleteDoc, onSnapshot,
};
// export default firebase;

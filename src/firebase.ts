import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import { firebaseConfig } from '../.env';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const firebase = {
  db,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
};
export default firebase;

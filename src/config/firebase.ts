import { initializeApp } from 'firebase/app';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBJlTH0EPGOoK9A-qc7VYmg-NNfu3iadNw",
  authDomain: "carros-6e927.firebaseapp.com",
  projectId: "carros-6e927",
  storageBucket: "carros-6e927.firebasestorage.app",
  messagingSenderId: "26698238919",
  appId: "1:32698238919:ios:314d4b1750407f5e650fe2",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
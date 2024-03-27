import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj12X0G0IWNXNlFViKTd0sG8gFQTMJSbw",
  authDomain: "olx-v1.firebaseapp.com",
  projectId: "olx-v1",
  storageBucket: "olx-v1.appspot.com",
  messagingSenderId: "809099673638",
  appId: "1:809099673638:web:3928298ec6df0f15cde6e7",
  measurementId: "G-E2XW88LE6Q"
};
  const firebase= initializeApp(firebaseConfig);
export { firebase };
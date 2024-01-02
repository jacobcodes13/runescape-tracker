// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkO5B7ymgZRNn-ifdtke7Mka3KE36pVRs",
  authDomain: "runescape-tracker-61861.firebaseapp.com",
  projectId: "runescape-tracker-61861",
  storageBucket: "runescape-tracker-61861.appspot.com",
  messagingSenderId: "708971790576",
  appId: "1:708971790576:web:7679a630077e1fb0d10235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol)

onAuthStateChanged(auth, user => {
	if (user != null) {
		console.log('logged in!');
	}
	else {
		console.log('No user');
	}
})
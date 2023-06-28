import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdhalHPgxQ0ETze0empF2bX5F5BFNG5Y8',
  authDomain: 'fir-reactnativeauth-9db6d.firebaseapp.com',
  projectId: 'fir-reactnativeauth-9db6d',
  storageBucket: 'fir-reactnativeauth-9db6d.appspot.com',
  messagingSenderId: '659712406356',
  appId: '1:659712406356:web:845647e58f1cc4277f4ec1'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const createUser = createUserWithEmailAndPassword;
export const signIn = signInWithEmailAndPassword;
export const signOutUser = signOut;

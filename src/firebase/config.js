import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEo3757udcdBQV_fObo5eZ4dNEs7OcIIk",
  authDomain: "syncflow-task.firebaseapp.com",
  projectId: "syncflow-task",
  storageBucket: "syncflow-task.firebasestorage.app",
  messagingSenderId: "1051254981720",
  appId: "1:1051254981720:web:97bd9fd6d81bd758f3362d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;

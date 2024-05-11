
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAdrN1lI6-_1gm49DfUuhdImod7vcDFnVI",
  authDomain: "reactlinks-a078e.firebaseapp.com",
  projectId: "reactlinks-a078e",
  storageBucket: "reactlinks-a078e.appspot.com",
  messagingSenderId: "989818794274",
  appId: "1:989818794274:web:24119a3b08faf368f1b57b"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
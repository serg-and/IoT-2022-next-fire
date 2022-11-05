import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8np8HRa9dpQyegt6pN45Ws7aROPJjkFI",
  authDomain: "crypto-tracker-cc922.firebaseapp.com",
  databaseURL: "https://crypto-tracker-cc922-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crypto-tracker-cc922",
  storageBucket: "crypto-tracker-cc922.appspot.com",
  messagingSenderId: "876150894888",
  appId: "1:876150894888:web:164f5a6df9db6c63fa201d",
  measurementId: "G-57VS3DXC49"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

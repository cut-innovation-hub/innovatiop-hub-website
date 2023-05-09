// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRESASE_API_KEY,
  authDomain: process.env.FIRESASE_AUTH_DOMAIN,
  projectId: process.env.FIRESASE_PROJECT_ID,
  storageBucket: process.env.FIRESASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRESASE_MESSAGING_SENDER_ID,
  appId: process.env.FIRESASE_APP_ID,
  measurementId: process.env.FIRESASE_MEASUREMENT_ID,
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

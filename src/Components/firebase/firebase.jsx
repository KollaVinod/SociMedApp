import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBxCmAY--bQFEb_NNBAg7IpjS51sPJhdsA',
  authDomain: 'media-88bac.firebaseapp.com',
  projectId: 'media-88bac',
  storageBucket: 'media-88bac.appspot.com',
  messagingSenderId: '991539017349',
  appId: '1:991539017349:web:bfb388003a7f60f76f5bec',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db, onAuthStateChanged}

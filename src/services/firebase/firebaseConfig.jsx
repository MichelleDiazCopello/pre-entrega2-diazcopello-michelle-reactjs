
import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6owxLALGB8o110HdzF9uIhRMnBpJ5kRE",
  authDomain: "tienda-natural-ffb0f.firebaseapp.com",
  projectId: "tienda-natural-ffb0f",
  storageBucket: "tienda-natural-ffb0f.appspot.com",
  messagingSenderId: "319219503815",
  appId: "1:319219503815:web:6302facfe86c12d7f624e2"
};

const app = initializeApp ( firebaseConfig );
export const database = getFirestore ( app );
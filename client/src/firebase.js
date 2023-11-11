
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYh49RtfsDxY-L0E2Kpd3yEHS5NEUsobY",
  authDomain: "tesla-e-com.firebaseapp.com",
  projectId: "tesla-e-com",
  storageBucket: "tesla-e-com.appspot.com",
  messagingSenderId: "333210669590",
  appId: "1:333210669590:web:45575ec396d7f408fd5b37"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDceseVH2V4Iakj2F1DDONNXei050yRIW8",
  authDomain: "tesla-clone-4ed8b.firebaseapp.com",
  projectId: "tesla-clone-4ed8b",
  storageBucket: "tesla-clone-4ed8b.appspot.com",
  messagingSenderId: "477502440009",
  appId: "1:477502440009:web:98d093119aacb6832c3598"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
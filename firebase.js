// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbH2o1dXmcP3Ps5aVjCphaox0yxV51Zfk",
  authDomain: "fbclone-e8369.firebaseapp.com",
  projectId: "fbclone-e8369",
  storageBucket: "fbclone-e8369.appspot.com",
  messagingSenderId: "224048498880",
  appId: "1:224048498880:web:0964d05cc2f50cb289c525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const storage=getStorage();
export {db,storage};

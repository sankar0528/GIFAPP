// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4CveCvjQEY-hcejlirEZv_DxCrEzpFhw",
  authDomain: "gifapp-6f2fe.firebaseapp.com",
  projectId: "gifapp-6f2fe",
  storageBucket: "gifapp-6f2fe.appspot.com",
  messagingSenderId: "210365332356",
  appId: "1:210365332356:web:8bd9efc48392ad2eacbbd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default auth;
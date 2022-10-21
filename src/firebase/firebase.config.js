// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmA68x1JbKILC2peOtiO4ZFnwi2PBq7NA",
  authDomain: "news-portal-d7226.firebaseapp.com",
  projectId: "news-portal-d7226",
  storageBucket: "news-portal-d7226.appspot.com",
  messagingSenderId: "484525893873",
  appId: "1:484525893873:web:cf7b8279ecca426209a150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
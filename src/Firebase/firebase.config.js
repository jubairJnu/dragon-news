// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment vite is working', import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey: "AIzaSyAAwWqD4MP4obwhZaePbkfa7DgHYtUnB7M",
  authDomain: "dragon-news-cdb13.firebaseapp.com",
  projectId: "dragon-news-cdb13",
  storageBucket: "dragon-news-cdb13.appspot.com",
  messagingSenderId: "302715486368",
  appId: "1:302715486368:web:b255934fa0e2e9968509c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
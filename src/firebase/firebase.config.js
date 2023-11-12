// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTQo2AEDt25xVeAmYytNMRfmPYVYWf3Bw",
  authDomain: "cosmetics-and-beauty-shop.firebaseapp.com",
  projectId: "cosmetics-and-beauty-shop",
  storageBucket: "cosmetics-and-beauty-shop.appspot.com",
  messagingSenderId: "51463620157",
  appId: "1:51463620157:web:b9b8ed03f73a3742d74c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
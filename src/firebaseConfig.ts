// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpvJZD-r436_ARhTER9KFRO8QJR3-ultU",
  authDomain: "clone-backend-12aef.firebaseapp.com",
  projectId: "clone-backend-12aef",
  storageBucket: "clone-backend-12aef.appspot.com",
  messagingSenderId: "456938717559",
  appId: "1:456938717559:web:0e8f92a771111af872a172",
  measurementId: "G-6YZXP4DCVD"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
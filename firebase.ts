// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtU150SaiSZDLk4V3BN5R9YwaZQ2LhaCk",
  authDomain: "renewaa-9b536.firebaseapp.com",
  projectId: "renewaa-9b536",
  storageBucket: "renewaa-9b536.appspot.com",
  messagingSenderId: "454803634216",
  appId: "1:454803634216:web:41332fd4232a2c9530dd1d",
  measurementId: "G-JFRC198FPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((isSupported) => {
    if (isSupported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };

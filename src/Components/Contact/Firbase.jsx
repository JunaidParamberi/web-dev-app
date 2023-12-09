
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaa8LYseoN3sH4tX6WRWWz25quE9bLP9I",
  authDomain: "website-portfolio-e31ac.firebaseapp.com",
  projectId: "website-portfolio-e31ac",
  storageBucket: "website-portfolio-e31ac.appspot.com",
  messagingSenderId: "699365592331",
  appId: "1:699365592331:web:b0c360493f4cb1f7eae60e",
  measurementId: "G-NGNDH0JX1W"
};

const app = initializeApp(firebaseConfig);
const firStore = getFireStore(app)
const analytics = getAnalytics(app);
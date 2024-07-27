// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOV4iAQziteXkvOjF6ZBlNFsYTYDwECSw",
  authDomain: "raindocs-a679e.firebaseapp.com",
  projectId: "raindocs-a679e",
  storageBucket: "raindocs-a679e.appspot.com",
  messagingSenderId: "25079591688",
  appId: "1:25079591688:web:03cabb5eaea9707c86f2bd",
  measurementId: "G-TGE4W3YEQN"
};

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
async function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully");
  } catch (error) {
    console.error("Error signing up: ", error);
  }
}

// Login function
async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
  } catch (error) {
    console.error("Error logging in: ", error);
  }
}

// Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, redirect to notes page
    window.location.href = "notes.html";
  } else {
    // No user is signed in, stay on login/signup page
  }
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


// The Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOV4iAQziteXkvOjF6ZBlNFsYTYDwECSw",
    authDomain: "raindocs-a679e.firebaseapp.com",
    projectId: "raindocs-a679e",
    storageBucket: "raindocs-a679e.appspot.com",
    messagingSenderId: "25079591688",
    appId: "1:25079591688:web:03cabb5eaea9707c86f2bd",
    measurementId: "G-TGE4W3YEQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication state listener
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userId = user.uid;
    const docRef = doc(db, 'users', userId);

    // Load user's notes from Firestore
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      document.getElementById('page').innerHTML = docSnap.data().content;
    } else {
      console.log("No such document!");
    }

    // Save function
    const save = async (event) => {
      console.log('Text changed: ', event.target.innerHTML);
      await setDoc(docRef, {
        content: document.getElementById('page').innerHTML
      });
    };

    // Debounce function
    const debounce = (func, delay) => {
      let debounceTimer;
      return function(event) {
        clearTimeout(debounceTimer);
        document.getElementById('icon').style.opacity = 0;
        debounceTimer = setTimeout(async () => {
          await func(event);
          document.getElementById('icon').style.opacity = 0.75;
        }, delay);
      };
    };

    const debouncedSave = debounce(save, 1000); // Delay in milliseconds

    // Event listeners
    const textarea = document.getElementById('page');
    textarea.addEventListener('input', debouncedSave);
    textarea.addEventListener('keyup', debouncedSave);
  } else {
    console.log("No user is signed in.");
  }
});

function showsav() {
  document.getElementById('icon').style.display = 'block';
}

function hidesav() {
  document.getElementById('icon').style.display = 'none';
}

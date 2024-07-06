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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Load saved notes
const docRef = db.collection('notes').doc('personal');
docRef.get().then((doc) => {
  if (doc.exists) {
    document.getElementById('notes').value = doc.data().content;
  }
});

function showsav() {
  document.getElementById('icon').style.display = 'block';
}

function hidesav() {
  document.getElementById('ivon').style.display = 'none';
}

let debounceTimer;
const debounceDelay = 1000; // Delay in milliseconds

const save = (event) => {
  console.log('Text changed: ', event.target.value);
  docRef.set({
    content: document.getElementById('notes').value
  });
};

const debounce = (func, delay) => {
  return function(event) {
    clearTimeout(debounceTimer);
    document.getElementById('icon').style.display = 'none';
    debounceTimer = setTimeout(() => {
        func(event);
        document.getElementById('icon').style.display = 'block';
    }, delay);
  };
};

const debouncedSave = debounce(save, debounceDelay);

const textarea = document.getElementById('page');
textarea.addEventListener('input', debouncedSave);
textarea.addEventListener('keyup', debouncedSave);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx71ez8lPKcbw8IRzDpf8JlVRoyMNXJjg",
  authDomain: "signuplogin-28273.firebaseapp.com",
  databaseURL: "https://signuplogin-28273-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "signuplogin-28273",
  storageBucket: "signuplogin-28273.appspot.com",
  messagingSenderId: "233843235247",
  appId: "1:233843235247:web:dd7910831f8e6b84a4b75a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

document.getElementById('signup').addEventListener('click', (e) => {
  e.preventDefault();

  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Successful signup!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

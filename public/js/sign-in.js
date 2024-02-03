import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANAPty9_gSmbL647aweJQxcpkEfXSfAI4",
  authDomain: "mercury-54d92.firebaseapp.com",
  projectId: "mercury-54d92",
  storageBucket: "mercury-54d92.appspot.com",
  messagingSenderId: "1066288131149",
  appId: "1:1066288131149:web:4bfc99b0be474efacac004",
  measurementId: "G-T9J18PR843"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {
  const signInButton = document.getElementById('signinButton');

  signInButton.addEventListener('click', async function () {
    const emailInput = document.querySelector('input[placeholder="EMAIL OR USERMAME"]');
    const passwordInput = document.querySelector('input[placeholder="PASSWORD"]');

    const email = emailInput.value;
    const password = passwordInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Errore: Formato dell\'email non valido');
      return;
    }

    try {
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));

      if (querySnapshot.empty) {
        alert('Errore: L\'email non esiste nel database');
      } else {
        window.location.href = 'page.html';  
      }
    } catch (error) {
      console.error('Errore durante l\'autenticazione:', error);
    }
  });
});


async function saveGoogleDataToFirestore(id) {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'google-users'), where('id', '==', id)));

    if (querySnapshot.empty) {
      alert('Errore: L\'email non esiste nel database');
    } else {
      window.location.href = 'page.html';
    }
  } catch (error) {
    console.error('Errore durante l\'autenticazione:', error);
  }
};

document.getElementById('param').addEventListener('change', async function () {
  const user = document.getElementById("param").value;
  console.log(user);
  saveGoogleDataToFirestore(user);
})
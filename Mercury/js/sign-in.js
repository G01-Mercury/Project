import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGoB74Ce_Jxe1hkCcQMkyQSEUreH2ntkE",
  authDomain: "mercury-580ed.firebaseapp.com",
  projectId: "mercury-580ed",
  storageBucket: "mercury-580ed.appspot.com",
  messagingSenderId: "399781289148",
  appId: "1:399781289148:web:8ab7b6c67927cee361c4b9",
  measurementId: "G-7532J1B7NJ"
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
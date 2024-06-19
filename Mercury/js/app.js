import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGoB74Ce_Jxe1hkCcQMkyQSEUreH2ntkE",
  authDomain: "mercury-580ed.firebaseapp.com",
  projectId: "mercury-580ed",
  storageBucket: "mercury-580ed.appspot.com",
  messagingSenderId: "399781289148",
  appId: "1:399781289148:web:8ab7b6c67927cee361c4b9",
  measurementId: "G-7532J1B7NJ"
};

async function saveGoogleDataToFirestore(id, fullName, email, givenName, familyName, picture) {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const emailExistsSnapshot = await checkIfEmailExists2(email);
  async function checkIfEmailExists2(email) {
      const q = query(collection(db, 'google-users'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      return querySnapshot;
  }

  if (!emailExistsSnapshot.empty) {
      alert('Errore: L\'email è già presente nel database');
  } else {
      try {
          await addDoc(collection(db, 'google-users'), {
              id,
              fullName,
              email,
              givenName,
              familyName,
              picture,
          });

          alert('Dati di Google inseriti con successo');
          window.location.href = 'sign-up_3.html';
      } catch (error) {
          alert('Errore durante il salvataggio dei dati di Google nel database: ' + error.message);
          console.error('Errore durante il salvataggio dei dati di Google nel database:', error);
      }
  }
}



document.getElementById('param').addEventListener('change', async function () {
  const paramValue = document.getElementById("param").value;
  const paramValuesArray = paramValue.split(',');

  const userId = paramValuesArray[0];
  const fullName = paramValuesArray[1];
  const email = paramValuesArray[2];
  const givenName = paramValuesArray[3];
  const familyName = paramValuesArray[4];
  const picture = paramValuesArray[5];

  await saveGoogleDataToFirestore(userId, fullName, email, givenName, familyName, picture);
})



document.addEventListener('DOMContentLoaded', function () {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  async function checkIfEmailExists(email) {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  async function saveDataToFirestore() {
    const username = document.querySelector('input[placeholder="USERNAME"]').value;
    const email = document.querySelector('input[placeholder="EMAIL"]').value;
    const password = document.querySelector('input[placeholder="PASSWORD"]').value;
    const gender = document.getElementById('genderSelect').value;
    const dateOfBirth = document.getElementById('dataNascita').value;
    const country = document.getElementById('nazioni').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Errore: Formato dell\'email non valido');
      return;
    }

    const emailExistsSnapshot = await checkIfEmailExists(email);

    if (!emailExistsSnapshot.empty) {
      alert('Errore: L\'email è già presente nel database');
    } else {
      try {
        await addDoc(collection(db, 'users'), {
          username,
          email,
          password,
          gender,
          dateOfBirth,
          country
        });
        window.location.href = 'sign-up_3.html';
      } catch (error) {
        alert('Errore durante il salvataggio dei dati nel database: ' + error.message);
      }
    }
  }
  const submitButton = document.getElementById('signupButton');

  submitButton.addEventListener('click', function () {
    saveDataToFirestore();
  });



})

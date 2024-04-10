// main.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyDtZFHrMNSQIgR095VRVayng4HdWFeB1u4",
  authDomain: "teste-gv-pre.firebaseapp.com",
  projectId: "teste-gv-pre",
  storageBucket: "teste-gv-pre.appspot.com",
  messagingSenderId: "108479622880",
  appId: "1:108479622880:web:18c5404fbe5b06e2baea85",
  measurementId: "G-Z7VJCRKEQ3"
};

  // Initialize Firebase
  let app = initializeApp(firebaseConfig);
  let db = getFirestore(app);
console.log("Initializing Firebase its running");


async function displayEmails() {
  const querySnapshot = await getDocs(query(collection(db, "email_list"), orderBy("timestamp", "desc")));
  const emailsContainer = document.getElementById("emailsContainer");
  emailsContainer.innerHTML = ""; // Clear previous emails

  querySnapshot.forEach((doc) => {
    const email = doc.data().email;
    const pTag = document.createElement("p");
    pTag.textContent = email;
    emailsContainer.appendChild(pTag);
  });
}

// Call the function to display emails
displayEmails();
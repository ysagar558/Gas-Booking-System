// import { initializeApp } from 'firebase/app'
// import {
//   getFirestore, collection, getDocs,
//   addDoc, deleteDoc, doc
// } from 'firebase/firestore'
// import { script } from 'vm';


// const firebaseConfig = {
//    apiKey: "AIzaSyBvHWFmCPRSCaedYke1m703omWo1nU2FVo",
//    authDomain: "gas-agency-6.firebaseapp.com",
//    projectId: "gas-agency-6",
//    storageBucket: "gas-agency-6.appspot.com",
//    messagingSenderId: "555248706798",
//    appId: "1:555248706798:web:c25787f05920d53b5cbfff"
//  };

//  // Initialize Firebase
// initializeApp(firebaseConfig);


// var db = getFirestore();

//  function validateLogin(get) {
//      // var username = document.getElementById('username').value;
//      // var password = document.getElementById('password').value;

//      // // Add your authentication logic here
//      // // For a simple example, let's use a hardcoded username and password
//      // if (username === 'admin' && password === 'admin123') {
//      //     alert('Login successful! Redirecting to the admin dashboard.');
//      //     // Add redirection logic or other actions after successful login
//      // } else {
//      //     alert('Invalid username or password. Please try again.');
//      // }
//      const email = document.getElementById('email').value;
//    const password = document.getElementById('password').value;
   

//    // Query the Firestore collection for the user with the provided email
//    db.collection('users').where('email', '==', email).get()
//       .then((querySnapshot) => {
//          if (!querySnapshot.empty) {
//             // User found, check password
//             const user = querySnapshot.docs[0].data();
//             if (user.password === password) {
//                // Successfully logged in
//                console.log('Login successful');
//                // Redirect to another page or perform other actions
//             } else {
//                console.error('Incorrect password');
//             }
//          } else {
//             console.error('User not found');
//          }
//       })
//       .catch((error) => {
//          console.error('Error:', error);
//       });
//  }
//  <script src="bundle.js"></script>
 
 
 
 
 
 
 
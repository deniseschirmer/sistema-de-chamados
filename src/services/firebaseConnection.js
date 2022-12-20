import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCGJAY-fL9IN3BSEzqQsL5jaJZcQZIQ4Q",
    authDomain: "sistema-44b8e.firebaseapp.com",
    projectId: "sistema-44b8e",
    storageBucket: "sistema-44b8e.appspot.com",
    messagingSenderId: "264921743554",
    appId: "1:264921743554:web:3e481431c99d8419a4fb5b",
    measurementId: "G-9CGWPCMDEN"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;


//   const app = initializeApp(firebaseConfig);
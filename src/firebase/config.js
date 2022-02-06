import * as firebase from 'firebase/app'; 
import 'firebase/storage';
import 'firebase/firestore'; 

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA5kaAGxF454RDopn3bBG_TnRsCbidWkhk",
    authDomain: "omeje-firegram.firebaseapp.com",
    projectId: "omeje-firegram",
    storageBucket: "omeje-firegram.appspot.com",
    messagingSenderId: "442148803772",
    appId: "1:442148803772:web:3e0a784520902f58c7ecb9"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage(); 
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/Firestore';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCZ4riJ2Eomf0bu3_RHobl2CgOuBAt88JQ",
    authDomain: "bosom-buddies-d3f09.firebaseapp.com",
    projectId: "bosom-buddies-d3f09",
    storageBucket: "bosom-buddies-d3f09.appspot.com",
    messagingSenderId: "919429772765",
    appId: "1:919429772765:web:2dac7db50c4ccf5f247234",
    measurementId: "G-57MXENPEVS"
  });
  const Bosom_buddies = initializeApp(firebaseConfig);
  console.log(defaultProject.Bosom_buddies);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);



  //detech auth & state
  onAuthStateChanged(auth, user=>{
    if (user =! null) {
        console.log('logged in');
    } else {
        console.log('No user');
      }
    });


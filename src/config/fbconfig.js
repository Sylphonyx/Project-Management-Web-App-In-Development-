import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAJZtv2qQyH3Zfo9t1RDqZdCRTRZI0TF-o",
    authDomain: "maninthebox-planner.firebaseapp.com",
    projectId: "maninthebox-planner",
    storageBucket: "maninthebox-planner.appspot.com",
    messagingSenderId: "284918807005",
    appId: "1:284918807005:web:8a3e8012f8180dcb21de34",
    measurementId: "G-54TFKP6W88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
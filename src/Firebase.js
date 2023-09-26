import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqEiY56cf0b8oChv86JXiZD3hlgYR1NTQ",
  authDomain: "soma-web-ed932.firebaseapp.com",
  projectId: "soma-web-ed932",
  storageBucket: "soma-web-ed932.appspot.com",
  messagingSenderId: "511291757118",
  appId: "1:511291757118:web:b0ea5f8544bb0da2a2b76f"
};

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
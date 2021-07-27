import firebase from "firebase";

import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJETC_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  
firebase.initializeApp(firebaseConfig);

export const auth= firebase.auth();
export const database = firebase.databese();
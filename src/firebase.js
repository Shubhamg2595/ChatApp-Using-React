import firebase from 'firebase/app'
import "firbase/auth"
import "firbase/database"
import "firbase/storage"
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWqIcON1Dcy4HZZV8Yj8zPTlzq6Ja6wSo",
    authDomain: "chat-app-react-b1ee4.firebaseapp.com",
    databaseURL: "https://chat-app-react-b1ee4.firebaseio.com",
    projectId: "chat-app-react-b1ee4",
    storageBucket: "chat-app-react-b1ee4.appspot.com",
    messagingSenderId: "333750957720"
  };
  firebase.initializeApp(config);
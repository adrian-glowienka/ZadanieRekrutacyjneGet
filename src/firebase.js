import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD7ijeGLcLnUQx0ETe1aJjXmnLIW3szHPI",
    authDomain: "zadanierekrutacyjneget.firebaseapp.com",
    databaseURL: "https://zadanierekrutacyjneget.firebaseio.com",
    projectId: "zadanierekrutacyjneget",
    storageBucket: "zadanierekrutacyjneget.appspot.com",
    messagingSenderId: "683903505298",
    appId: "1:683903505298:web:9601d5d6914040a369674b",
    measurementId: "G-6PXGY2DXPP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  
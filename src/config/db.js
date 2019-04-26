import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyAcec8Hf2QaUm4bTH00MsKgBNTF12J6Q3o",
    authDomain: "vfire-poetry.firebaseapp.com",
    databaseURL: "https://vfire-poetry.firebaseio.com",
    projectId: "vfire-poetry",
    storageBucket: "vfire-poetry.appspot.com",
    messagingSenderId: "899471083853"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()
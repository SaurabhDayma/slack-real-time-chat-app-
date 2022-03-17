import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyDXIcIitjrM_N9cgRhBrWCqkHUYHIUwjmU",
    authDomain: "slack-colone.firebaseapp.com",
    projectId: "slack-colone",
    storageBucket: "slack-colone.appspot.com",
    messagingSenderId: "380155002061",
    appId: "1:380155002061:web:09fae3fab06c2e5853bd84",
    measurementId: "G-HCTJK6BL3R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider,db};


import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyCqD1pX7bHKsvgIPFTfa7pyweBX8Fr-V14",
    authDomain: "winelist-43649.firebaseapp.com",
    databaseURL: "https://winelist-43649.firebaseio.com",
    projectId: "winelist-43649",
    storageBucket: "winelist-43649.appspot.com",
    messagingSenderId: "389879085430"
};

firebase.initializeApp(config);

export default firebase;
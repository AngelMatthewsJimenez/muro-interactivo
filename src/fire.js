import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBeLm-1gJZI5W-PIamtqi2aV6Lmp2nYTwc",
    authDomain: "murointeractivo-cb100.firebaseapp.com",
    projectId: "murointeractivo-cb100",
    storageBucket: "murointeractivo-cb100.appspot.com",
    messagingSenderId: "374774996298",
    appId: "1:374774996298:web:4fb473522a22a97bc335b3",
    measurementId: "G-62J2PYN6CM"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxkp9IfWZfF-s1Jdtv64RZsBW8GjwrGrM",
  authDomain: "sila-auth-ed703.firebaseapp.com",
  projectId: "sila-auth-ed703",
  storageBucket: "sila-auth-ed703.appspot.com",
  messagingSenderId: "10115694930",
  appId: "1:10115694930:web:f13ed44d22098963a9ba8b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAS3NbrIBMQqu1p4tlbxDuUdlTRUcFm6tM",
  authDomain: "music-7ef24.firebaseapp.com",
  projectId: "music-7ef24",
  storageBucket: "music-7ef24.appspot.com",
  appId: "1:928817928224:web:8b41d89f464fbc31eb0445",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};

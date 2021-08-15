import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

firebase.initializeApp(
    {
        apiKey: "AIzaSyA1Bl1RXq6_GGvPGMD9aTJnBRkC1vlwtPU",
    authDomain: "reels-ac486.firebaseapp.com",
    databaseURL: "https://reels-ac486-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "reels-ac486",
    storageBucket: "reels-ac486.appspot.com",
    messagingSenderId: "576942496858",
    appId: "1:576942496858:web:3f42c3ea48158d60f24c63"
    }
);

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    posts: firestore.collection('posts'),
    comments: firestore.collection('comments'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();


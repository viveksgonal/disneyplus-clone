import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBe4ST96QuWKw4jXGryGmWkdItZ-1osQps",
    authDomain: "disney-clone-5b26e.firebaseapp.com",
    projectId: "disney-clone-5b26e",
    storageBucket: "disney-clone-5b26e.appspot.com",
    messagingSenderId: "804717839144",
    appId: "1:804717839144:web:31e1409c6042f6c1b0061d",
    measurementId: "G-FE8CEMVE9M"
  };
 
   // Initialize Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth  = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();
   const storage = firebase.storage();

   export {auth,provider,storage};
   export default db;
//    firebase.analytics();
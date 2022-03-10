import  firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBvOKbYMDkhgZYoM-TBAndLZn0kd-nB7EU",
    authDomain: "linkedin-2-clone.firebaseapp.com",
    projectId: "linkedin-2-clone",
    storageBucket: "linkedin-2-clone.appspot.com",
    messagingSenderId: "219876848468",
    appId: "1:219876848468:web:2877100538c93084f54ec1"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
  
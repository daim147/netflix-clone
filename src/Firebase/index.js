import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAy-2LhGFz919Z39wQ-Xopm1K_F4PXyzeo",
  authDomain: "netflix-clone-fd337.firebaseapp.com",
  projectId: "netflix-clone-fd337",
  storageBucket: "netflix-clone-fd337.appspot.com",
  messagingSenderId: "758868226941",
  appId: "1:758868226941:web:57451acc416e55c0115214",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.firestore();
export const auth = firebaseApp.auth();

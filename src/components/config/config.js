import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb-RNscpb_3pl4J1wgIpIE9bw2AVTzMvk",
  authDomain: "snaplink-ee946.firebaseapp.com",
  projectId: "snaplink-ee946",
  storageBucket: "snaplink-ee946.appspot.com",
  messagingSenderId: "280364475471",
  appId: "1:280364475471:web:acbbd2495259416c23763a",
  databaseURL: "https://snaplink-ee946.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

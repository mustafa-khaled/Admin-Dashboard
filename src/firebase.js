import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_KEY,
  authDomain: process.env.REACT_APP_ADMIN_DASHBOARD_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_ADMIN_DASHBOARD_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_ADMIN_DASHBOARD_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_ADMIN_DASHBOARD_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ADMIN_DASHBOARD_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBt7zsePyEUIVqRvMGEEVLTCuBlPtZoTP0",
  authDomain: "rtm-vdnk.firebaseapp.com",
  databaseURL:
    "https://rtm-vdnk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rtm-vdnk",
  storageBucket: "rtm-vdnk.appspot.com",
  messagingSenderId: "827861704312",
  appId: "1:827861704312:web:8fc9106d4763c04183d78d",
  measurementId: "G-GBV0TRMWEG",
};
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);

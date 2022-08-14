// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  collection,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxyLHmsmVV2jtD2eptqrO91HC1CuiJTY",
  authDomain: "pinoblanco-4f9ef.firebaseapp.com",
  projectId: "pinoblanco-4f9ef",
  storageBucket: "pinoblanco-4f9ef.appspot.com",
  messagingSenderId: "1057678828422",
  appId: "1:1057678828422:web:3d11b33349cf0004e18207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const appFirestore = getFirestore(app);

export async function createBuyOrder (dataOrder){
  const ordersCollectionRef = collection(appFirestore, "orders");
  const dateTimestamp = Timestamp.now();

  const dataOrderWithDate ={
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date: dateTimestamp
  };

  const orderCreated = await addDoc(ordersCollectionRef, dataOrderWithDate);
  console.log("addd:", orderCreated.id)
  return orderCreated;
}

export const db = getFirestore(app);
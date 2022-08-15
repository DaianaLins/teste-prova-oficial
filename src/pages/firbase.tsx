import React from 'react';
import { initializeApp } from 'firebase/app'
import {getStorage} from 'firebase/storage'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBHXmJhyUtniycOiCNq8HggJKJe-OTshEI",
  authDomain: "testecreathus-7d591.firebaseapp.com",
  projectId: "testecreathus-7d591",
  storageBucket: "testecreathus-7d591.appspot.com",
  messagingSenderId: "290467850217",
  appId: "1:290467850217:web:2403abfc21c4a58a330d78",
  measurementId: "G-TRW10G0X3K"
});


import React from 'react';
import { initializeApp } from 'firebase/app'
import {getStorage} from 'firebase/storage'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBHXmJhyUtniycOiCNq8HggJKJe-OTshEI",
  authDomain: "testecreathus-7d591.firebaseapp.com",
  projectId: "testecreathus-7d591"
});

export const storage = getStorage(firebaseApp);

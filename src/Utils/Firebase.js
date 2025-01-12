// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBczun3ih-G2Bya1I42Eh5HehwrYQjAdNE',
  authDomain: 'netflixgpt-a4e09.firebaseapp.com',
  projectId: 'netflixgpt-a4e09',
  storageBucket: 'netflixgpt-a4e09.firebasestorage.app',
  messagingSenderId: '922710265281',
  appId: '1:922710265281:web:a452e765a5b6d6c04b7340',
  measurementId: 'G-4KMKLGSVDP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

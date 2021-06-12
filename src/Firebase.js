import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCZAyMBYm83CrEstGgqz4WabOL3yoWocYI',
  authDomain: 'pt-ai-massey.firebaseapp.com',
  projectId: 'pt-ai-massey',
  storageBucket: 'pt-ai-massey.appspot.com',
  messagingSenderId: '215380103653',
  appId: '1:215380103653:web:e172d71bd451c281481f0c',
  measurementId: 'G-NSC5SYW8DC',
};
firebase.initializeApp(config);

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

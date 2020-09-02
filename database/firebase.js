import * as firebase from 'firebase';

const  firebaseConfig= {
    

    apiKey: "AIzaSyC0VQM4ui2EJ5thmztr_lFfWZZNJMNZC5E",
    authDomain: "notify-f12cf.firebaseapp.com",
    databaseURL: "https://notify-f12cf.firebaseio.com",
    projectId: "notify-f12cf",
    storageBucket: "notify-f12cf.appspot.com",
    messagingSenderId: "411337647418",
    appId: "1:411337647418:web:73e931819b33847324dc03",
    measurementId: "G-8GHYD2E7TW"

};

firebase.initializeApp(firebaseConfig);

export default firebase;
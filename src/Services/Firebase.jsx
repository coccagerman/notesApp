import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyAeK9tin--C9e0zVwsUuYfYzoLz-UQRVwo',
    authDomain: 'notesapp-e2d2b.firebaseapp.com',
    projectId: 'notesapp-e2d2b',
    storageBucket: 'notesapp-e2d2b.appspot.com',
    messagingSenderId: '986201412158',
    appId: '1:986201412158:web:d7a6122c1589b25d8f776f'
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}
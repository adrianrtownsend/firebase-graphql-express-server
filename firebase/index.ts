// Firebase Defaults
import admin from 'firebase-admin'
//import * as data from './school-app-api-service-account-key.json'
import { prod, emulator } from './config.firebase'

//const serviceAccount: any = data

/*export const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://school-app-213a1.firebaseio.com'
})*/

export const app = admin.initializeApp({
  databaseURL: emulator.databaseUrl
})

console.log('firebase initialized: ', app.name) 

export const auth = app.auth()
export const firestore = app.firestore()

const docRef = firestore.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const aTuringRef = firestore.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

const snapshot = await firestore.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});
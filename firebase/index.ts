// Firebase Defaults
import * as admin from 'firebase-admin'
//import * as data from './school-app-api-service-account-key.json'
import { prod, emulator } from './config.firebase'

export const firebase = admin.initializeApp({
  databaseURL: emulator.databaseUrl
})

console.log('firebase initialized: ', firebase) 

export default firebase
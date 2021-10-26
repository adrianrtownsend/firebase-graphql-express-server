// Firebase Defaults
import { application } from 'express'
import * as admin from 'firebase-admin'
import { emulator, prod } from './config.firebase'
import * as data from './school-app-api-service-account-key.json'

import dotenv from 'dotenv'

dotenv.config()

const config = emulator

// [] Need to change this later so configured with prod/emulator params
export const firebase = admin.initializeApp({
  /*credential: admin.credential.cert({
    projectId: config.credential.project_id,
    clientEmail: config.credential.client_email,
    privateKey: config.credential.private_key
  })*/
  projectId: "your-project-id"
})

console.log('firebase initialized: ', firebase) 
console.log(process.env.FIRESTORE_EMULATOR_HOST)

export default firebase
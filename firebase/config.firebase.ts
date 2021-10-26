import dotenv from 'dotenv'

dotenv.config()

type IConfig = {
  databaseUrl: string
}

export const prod = {
  credential: {
    type:process.env.FIREBASE_PROD_CREDENTIAL_TYPE,
    project_id:process.env.FIREBASE_PROD_CREDENTIAL_PROJECT_ID,
    private_key_id:process.env.FIREBASE_PROD_CREDENTIAL_PRIVATE_KEY_ID,
    private_key:process.env.FIREBASE_PROD_CREDENTIAL_PRIVATE_KEY,
    client_email: process.env.FIREBASE_PROD_CREDENTIAL_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_PROD_CREDENTIAL_CLIENT_ID,
    auth_uri:process.env.FIREBASE_PROD_CREDENTIAL_AUTH_URI,
    token_uri:process.env.FIREBASE_PROD_CREDENTIAL_TOKEN_URI,
    auth_provider_x509_cert_url:process.env.FIREBASE_PROD_CREDENTIAL_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url:process.env.FIREBASE_PROD_CREDENTIAL_CLIENT_X509_CERT_URL
  },
  databaseURL: process.env.FIREBASE_PROD_DATABASE_URL
}

export const emulator = {
  databaseUrl: process.env.FIREBASE_EMULATOR_DATABASE_URL,
  credential: {
    type:process.env.FIREBASE_PROD_CREDENTIAL_TYPE,
    project_id:process.env.FIREBASE_PROD_CREDENTIAL_PROJECT_ID,
    private_key_id:process.env.FIREBASE_PROD_CREDENTIAL_PRIVATE_KEY_ID,
    private_key:process.env.FIREBASE_PROD_CREDENTIAL_PRIVATE_KEY,
    client_email: process.env.FIREBASE_PROD_CREDENTIAL_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_PROD_CREDENTIAL_CLIENT_ID,
    auth_uri:process.env.FIREBASE_PROD_CREDENTIAL_AUTH_URI,
    token_uri:process.env.FIREBASE_PROD_CREDENTIAL_TOKEN_URI,
    auth_provider_x509_cert_url:process.env.FIREBASE_PROD_CREDENTIAL_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url:process.env.FIREBASE_PROD_CREDENTIAL_CLIENT_X509_CERT_URL
  },
}
import firestore from '../index'

import '../../types'


const db = firestore

interface ICreateDocumentData {
  name: string;
}

interface ICreateDocument {
  collection: string;
  data: ICreateDocumentData;
}

interface IListDocuments {
  collection: string
}

interface IListDocumentsByFilter {
  collection: string
  filters: Array<string>
}

interface IGetDocumentByIdReq {
  collection: string
  id: string
}

export const createDocument = async ({collection, data}: ICreateDocument) => {
  try {
    const docRef = db.collection(collection)
    const docSet = await docRef.add(data)
    return docSet
  } catch(error) {
    throw new Error("error")
  }
}

export const listDocuments = async ({collection}: IListDocuments) => {
  const docRef = db.collection(collection)
  const snapshot = await docRef.get()
  return snapshot
}

export const listDocumentsByFilter = async ({collection, filters}: IListDocumentsByFilter) => {
  try {
    const docRef = db.collection(collection).where('filters', '>', 'filters')
    return docRef
  } catch (error) {
    throw new Error("error")
    
  }
}

export const getDocumentByID = async ({collection, id}: IGetDocumentByIdReq)  => {
  const docRef = await db.collection(collection).doc(id).get()
  if(!docRef.exists) {
    throw new Error("None")
  } else {
    return docRef.data()
  }
}

export const getDocumentByFilter = async ({collection, filters}) => {''}

export const updateDocument = async ({collection, id, data}) => {''}

export const deleteDocument = async ({collection, id}) => {''}

export const deleteDocuments = async ({collection, ids}) => {''}
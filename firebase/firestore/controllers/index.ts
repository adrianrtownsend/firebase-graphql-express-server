import firestore from '../index'

import '../../../types'


const db = firestore

interface ICreateDocumentData {
  name: string;
}

interface ICreateDocument {
  collection: any
  data: ICreateDocumentData
}

interface IListDocuments {
  collection: string
}

interface IListDocumentsByFilter {
  collection: string
  filters: Array<string>
}

interface IGetDocumentById {
  collection: string
  id: string
}

interface IGetDocumentByFilter {
  collection: string
  filters: Array<string>
}

interface IUpdateDocumentData {
  name: string;
}

interface IUpdateDocument {
  collection: any
  id: string
  data: IUpdateDocumentData
}

interface IDeleteDocument {
  collection: any
  id: string
}

interface IDeleteDocuments {
  collection: any
  ids: Array<string>
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
  try {
    const docRef = db.collection(collection)
    const snapshot = await docRef.get()
    return snapshot
  } catch (error) {
    throw new Error("error")
  }
}

export const listDocumentsByFilter = async ({collection, filters}: IListDocumentsByFilter) => {
  try {
    const docRef = db.collection(collection).where('filters', '>', 'filters')
    return docRef
  } catch (error) {
    throw new Error("error")
  }
}

export const getDocumentByID = async ({collection, id}: IGetDocumentById)  => {
  const docRef = await db.collection(collection).doc(id).get()
  if(!docRef.exists) {
    throw new Error("None")
  } else {
    return docRef.data()
  }
}

export const getDocumentByFilter = async ({collection, filters}: IGetDocumentByFilter) => {''}

export const updateDocument = async ({collection, id, data}: IUpdateDocument) => {''}

export const deleteDocument = async ({collection, id}: IDeleteDocument) => {''}

export const deleteDocuments = async ({collection, ids}: IDeleteDocuments) => {''}
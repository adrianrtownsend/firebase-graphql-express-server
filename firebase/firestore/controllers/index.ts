import { firestore } from '../index'

import '../../../types'


const db = firestore

interface ICreateDocumentData {
  name: string;
}

interface ICreateDocument {
  collection: any
  data: ICreateDocumentData
  context: any
}

interface IListDocuments {
  collection: string
  context: any
}

interface IListDocumentsByFilter {
  collection: string
  filters: {
    fieldPath: string | FirebaseFirestore.FieldPath, 
    opStr: FirebaseFirestore.WhereFilterOp, 
    value: any
  }
  
}

interface IGetDocumentById {
  collection: string
  id: string
  context: any
}

interface IGetDocumentByFilter {
  collection: string
  filters: {
    fieldPath: string | FirebaseFirestore.FieldPath, 
    opStr: FirebaseFirestore.WhereFilterOp, 
    value: any
  }
  context: any
}

interface IUpdateDocumentData {
  name: string
}

interface IUpdateDocument {
  collection: any
  id: string
  data: IUpdateDocumentData
  context: any
}

interface IDeleteDocument {
  collection: any
  id: string
  context: any
}

interface IDeleteDocuments {
  collectionPath: any
  batchSize: any
}


/**
 * Handle Responses for Events
*/
const response = {
  success: (msg: string, data?: any ) => ({
    message: msg,
    data: data || []
  }),
  fail: (msg: string) => { 
    throw new Error(msg) 
  }
}

/**
 * 
*/
/*export const subscription = async (fn: any) => {
  try {
    const observer = fn.doc.onSnapshot(docSnapshot => {
      console.log(`Received doc snapshot: ${docSnapshot}`);
      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    })
  } catch (error) {
    ''
  }
}*/

/**
 * Create document
 * @param fn {document collection, collection data}
 * @returns 
*/
export const createDocument = async (fn: ICreateDocument) => {
  try {
    const docRef = db.collection(fn.collection)
    const snapshot = await docRef.add(fn.data)
    
    return response.success('Document created Successfully', snapshot)

  } catch(error) {
    console.log('error creating document: ', error)
    
    return response.fail('Error creating document')

  }
}

/**
 * List documents
 * @param fn 
 * @returns 
*/
export const listDocuments = async (fn: IListDocuments) => {
  try {
    const docRef = db.collection(fn.collection)
    const snapshot = await docRef.get()

    if(snapshot.empty) {
      console.log('no documents')
      return response.success('No Documents found')
    }
  
    const data = await snapshot.docs.map(doc => doc.data())
    
    return response.success('Documents found', data)

  } catch (error) {
    console.log('error listing documents: ', error)
    
    throw response.fail('Error listing documents')

  }
}

/**
 * List documents by filter
 * @param fn 
 * @returns 
 */
export const listDocumentsByFilter = async (fn: IListDocumentsByFilter) => {
  try {
    const docRef = db.collection(fn.collection)
    const snapshot = await docRef.where(fn.filters.fieldPath, fn.filters.opStr, fn.filters.value).get()

    if(snapshot.empty) {
      console.log('no documents')
      return response.success('No Documents found')
    }

    const data = snapshot.forEach(doc => doc.data())

    return response.success('Documents found', data)
  
  } catch (error) {
    console.log('error listing documents: ', error)
    
    return response.fail('Error listing documents by filter')
  
  }
}

/**
 * Get document by id
 * @param fn 
 * @returns 
 */
export const getDocumentByID = async (fn: IGetDocumentById)  => {
  try {
    const docRef = db.collection(fn.collection)
    const snapshot = await docRef.doc(fn.id).get()

    if(!snapshot.exists) {
      return response.success('Document does not exist')
    } else {
      return response.success('Document found', snapshot.data())
    }

  } catch (error) {
    console.log('error listing documents: ', error)
    
    throw response.fail('Error listing documents')

  }
  
}

/**
 * Get document by filter
 * @param fn 
 * @returns 
 */
export const getDocumentByFilter = async (fn: IGetDocumentByFilter) => {
  try {
    // TODO - check if prop exists on collection type 

    const docRef = db.collection(fn.collection)
    const snapshot = await docRef.where(fn.filters.fieldPath, fn.filters.opStr, fn.filters.value).get()

    if(snapshot.empty) {
      return response.success('Document not found')
    }

    const data = snapshot.forEach(doc => doc.data())

    return response.success('Document found', data)
  
  } catch (error) {
    return response.fail('Error getting document by filter')
  
  }
}

export const updateDocument = async (fn: IUpdateDocument) => {
  try {
    const docRef = db.collection(fn.collection).doc(fn.id)

    //const res = await docMutation(docRef.update(data), 'Updated document', 'Error updating document')
    
    return
  } catch (error) {
    console.log('Error updating document: ', error)
    return response.fail('Error getting document by filter')
  }
}

export const deleteDocument = async (fn: IDeleteDocument) => {
  try {
    await db.collection(fn.collection).doc(fn.id).delete()

    return response.success('Successfully deleted document')

  } catch (error) {
    console.log('error deleting document: ', error)

    return response.fail('Error delete document')
  }
}

export const deleteDocuments = async (fn: IDeleteDocuments) => {
  const collectionRef = db.collection(fn.collectionPath)
  const query = collectionRef.orderBy('__name__').limit(fn.batchSize)

  const deleteQueryBatch = async (fn: any) => {
    const snapshot = await query.get()
    const batchSize = snapshot.size

    if (batchSize === 0) {
      // When there are no documents left, we are done
      fn.resolve()
      return
    }

    // Delete documents in a batch
    const batch = db.batch()
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref)
    })
    await batch.commit()

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      const query = fn.query
      const resolve = fn.resolve
      deleteQueryBatch({query, resolve})
    })

  }

  return new Promise((resolve, reject) => {
    deleteQueryBatch({query, resolve}).catch(reject);
  })

}

/*export const deleteCollections = async([collection]: Array<string>) => {
  try {
    ''
  } catch (error) {
    ''
  }
}*/

// Pending
/*export const importDocumentsFromFile = async (fileName : string) => {
  try {
    ''
  } catch (error) {
    ''
  }
}*/

// Pending
/*export const resetDB = async (fileName:string) => {
  try {
    ''
  } catch (error) {
    ''
  }
}*/
import { FieldNode } from 'graphql'
import * as doc from '../controllers'

enum ClassStatus {
  CLOSED = 0,
  OPEN = 1,
  INACTIVE = 2
}

enum ClassStudentStatus {
  PENDING = 0,
  ENROLLED = 1,
  DENIED = 2
}

enum AssignmentStatus {
  CLOSED = 0,
  OPEN = 1,
  INACTIVE = 2
}

enum GradeCode {
  A = 4,
  B = 3,
  C = 2,
  D = 1,
  F = 0
}

interface PersonName {
  first: string
  last: string
}

interface ClassKey {
  id: string
  name: ObjectName
}

interface ObjectName {
  name: string
}


interface Grade {
  gradeID: string
  type: string // class | assignment
  code: GradeCode
  percent: number
  points: number
  score: number
}

/*interface Teacher {
  id: string
  name: PersonName
  username: string
  image?: string
  classes?: [ClassKey]
  ownerUID?: string
}*/

/* interface Student {
  id: string
  name: PersonName
  username: string
  image: string
  classes: [ClassKey | null]
  grades: [Grade | null]
  ownerUID: string
}*/

export interface Assignment {
  code: string
  dueDate: string
  name: ObjectName
  points: number
  status: AssignmentStatus
}

export interface ClassStudent {
  name: PersonName
  studentID: string
  status: ClassStudentStatus
  grade: Grade
  grades?: [Grade]
}

export interface ClassTeacher {
  name: PersonName
  teacherID: string
}

export interface Class {
  name: ObjectName
  status: ClassStatus
  code: string
  teacher: ClassTeacher
  assignments?: [Assignment]
  students?: [ClassStudent]
  limit: {
    requests: number
    size: number
  }
}

export interface IControllerStudentCreate {
  name: {
    first: string
    last: string
  }
  username: string
  image?: string
  ownerUID: string
}

export interface IControllerStudentUpdate {
  name: {
    first: string
    last: string
  }
  username: string
  image?: string
  ownerUID: string
}

export interface IModelStudent {
  create: IControllerStudentCreate
  update: IControllerStudentUpdate
}

class OpStr {

}

interface IStudentFilters {
  name: string
}

export const Student: any = async (data: any, context: any) => {
  const collection = 'students'
  console.log('data: ', data)
  switch(data.action.type) {
    case 'createStudent':
      return await doc.createDocument({collection, data, context})
    case 'listStudents':
      // eslint-disable-next-line no-case-declarations
      const res = await doc.listDocuments({collection, context})
      console.log('res is: ', res)
      return res
    case 'listStudentsByFilter':
      // doc.listDocumentsByFilter({collection: 'filter'})
      return 
    case 'getStudentByID':
      return await doc.getDocumentByID({collection, id: data.id, context})
    case 'getStudentByFilter':
      return await doc.getDocumentByFilter({collection, filters: data.filters, context})
    case 'updateStudent':
      return await doc.updateDocument({collection, id: data.id, data, context})
    default:
      return await doc.deleteDocument({collection, id: data.id, context})
  }

}

export const Teacher: any = async (data: any, context: any) => {
  const collection = 'teachers'

  switch(data.action.type) {
    case 'createTeacher':
      return await doc.createDocument({collection, data, context})
    case 'listTeachers':
      return await doc.listDocuments({collection, context})
    case 'listTeachersByFilter': 
      return
    case 'getTeacherByID':
      return await doc.getDocumentByID({collection, id: data.id, context})
    case 'getTeacherByFilter':
      return await doc.getDocumentByFilter({collection, filters: data.filters, context})
    case 'updateTeacher':
      return await doc.updateDocument({collection, id: data.id, data, context})
    case 'deleteTeacher':
      return await doc.deleteDocument({collection, id: data.id, context})
  }

}

export const Class: any = async (data: any, context: any) => {
  const collection = 'classes'

  switch(data.action.type) {
    case 'createClass':
      return await doc.createDocument({collection, data, context})
    case 'listClasses':
      return await doc.listDocuments({collection, context})
    case 'listClassesByFilter': 
      return
    case 'getClassByID':
      return await doc.getDocumentByID({collection, id: data.id, context})
    case 'getClassByFilter':
      return await doc.getDocumentByFilter({collection, filters: data.filters, context})
    case 'updateClass':
      return await doc.updateDocument({collection, id: data.id, data, context})
    case 'deleteClass':
      return await doc.deleteDocument({collection, id: data.id, context})
  }

}

export const Grade: any = async (data: any, context: any) => {
  const collection = 'grades'

  switch(data.action.type) {
    case 'createGrade':
      return await doc.createDocument({collection, data, context})
    case 'listGrades':
      return await doc.listDocuments({collection, context})
    case 'listGradesByFilter': 
      return
    case 'getGradeByID':
      return await doc.getDocumentByID({collection, id: data.id, context})
    case 'getGradeByFilter':
      return await doc.getDocumentByFilter({collection, filters: data.filters, context})
    case 'updateGrade':
      return await doc.updateDocument({collection, id: data.id, data, context})
    case 'deleteGrade':
      return await doc.deleteDocument({collection, id: data.id, context})
  }
}

export const Assignment: any = async (data: any, context: any) => {
  const collection = 'assignments'

  switch(data.action.type) {
    case 'createAssignment':
      return await doc.createDocument({collection, data, context})
    case 'listAssignments':
      return await doc.listDocuments({collection, context})
    case 'listAssignmentsByFilter': 
      return
    case 'getAssignmentByID':
      return await doc.getDocumentByID({collection, id: data.id, context})
    case 'getAssignmentByFilter':
      return await doc.getDocumentByFilter({collection, filters: data.filters, context})
    case 'updateAssignment':
      return await doc.updateDocument({collection, id: data.id, data, context})
    case 'deleteAssignment':
      return await doc.deleteDocument({collection, id: data.id, context})
  }

}
// Resolvers define the technique for fetching the types defined in the

import { createDocument } from "../../firebase/firestore/controllers"
import { students, teachers, classes } from "../typedefs/testData"
import * as db from '../../firebase/firestore/controllers'

// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    listStudents: () => {
      //return students
      return db.listDocuments({collection: 'students'})
    },
    getStudent: () => {
      return db.getDocumentByID({collection: 'students', id: '1' })
    },
    listTeachers: () => teachers,
    getTeacher: () => {teachers},
    listClasses: () => classes,
    getClass: () => {classes},
    listAssignments: () => {classes},
    getAssignment: () => {classes},
    listGrades: () => {classes},
    getGrade: () => {classes},
  },
  Mutation: {
    createStudent: () => {
      return createDocument({
        collection: 'student', 
        data: {
          name:'data'
        }
      })
    },
    updateStudent: () => {students},
    deleteStudent: () => {students},
    createTeacher: () => {
      return createDocument({
        collection: 'student', 
        data: {
          name:'data'
        }
      })
    },
    updateTeacher: () => {teachers},
    deleteTeacher: () => {teachers},
    createClass: () => {
      return createDocument({
        collection: 'student', 
        data: {
          name:'data'
        }
      })
    },
    updateClass: () => {classes},
    deleteClass: () => {classes},
    createAssignment: () => {
      return createDocument({
        collection: 'student', 
        data: {
          name:'data'
        }
      })
    },
    updateAssignment: () => {classes},
    deleteAssignment: () => {classes},
    createGrade: () => {
      return createDocument({
        collection: 'student', 
        data: {
          name:'data'
        }
      })
    },
    updateGrade: () => {classes},
    deleteGrade: () => {classes},
  }
}

export default resolvers
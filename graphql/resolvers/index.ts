import { students, teachers, classes } from "../typedefs/testData"
import { Student, Teacher, Class, Grade, Assignment } from '../../firebase/firestore/models'

interface IResolvers {
  obj?: any
  args: any
  context: any
  info?: any
}

// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    listStudents: (fn: IResolvers) => {
      return Student({
        action: {
          type: 'listStudents'
        }
      }, fn.context)
    },
    getStudent: (fn: IResolvers) => {
      //  return Student.getStudentByID()
      return Student({
        action: {
          type: 'getStudentByID'
        }
      }, fn.context)
    },
    listTeachers: (fn: IResolvers) => {
      // return Teacher.listTeachers()
      return Teacher({
        action: {
          type: 'listTeachers'
        }
      }, fn.context)
    },
    getTeacher: (fn: IResolvers) => {
      // return Teacher.getTeacherByID()
      return Teacher({
        action: {
          type: 'getTeacherByID'
        }
      }, fn.context)
    },
    listClasses: (fn: IResolvers) => {
      // return Class.listClasses()
      return Class({
        action: {
          type: 'listClasses'
        }
      }, fn.context)
    },
    getClass: (fn: IResolvers) => {
      // return Class.getClassByID()
      return Class({
        action: {
          type: 'getClassByID'
        }
      }, fn.context)
    },
    listAssignments: (fn: IResolvers) => {
      // return Assignment.listAssignments()
    },
    getAssignment: (fn: IResolvers) => {
      // return Assignment.getAssignment()
    },
    listGrades: (fn: IResolvers) => {
      // return Grade.listGrades()
    },
    getGrade: (fn: IResolvers) => {
      // return Grade.getGrade()
    },
  },
  Mutation: {
    createStudent: (fn: IResolvers) => {
      // return Student.createStudent()
      return Student({
        action: {
          type: 'createStudent'
        }
      }, fn.context)
    },
    updateStudent: (fn: IResolvers) => {
      // return Student.updateStudent()
      return Student({
        action: {
          type: 'updateStudent'
        }
      }, fn.context)
    },
    deleteStudent: (fn: IResolvers) => {
      // return Student.deleteStudent()
      return Student({
        action: {
          type: 'deleteStudent'
        }
      }, fn.context)
    },
    createTeacher: (fn: IResolvers) => {
      // return Teacher.createTeacher()
      return Teacher({
        action: {
          type: 'createTeacher'
        }
      }, fn.context)
    },
    updateTeacher: (fn: IResolvers) => {
      // return Teacher.updateTeacher()
      return Teacher({
        action: {
          type: 'updateTeacher'
        }
      }, fn.context)
    },
    deleteTeacher: (fn: IResolvers) => {
      // return Teacher.deleteTeacher()
      return Teacher({
        action: {
          type: 'deleteTeacher'
        }
      }, fn.context)
    },
    createClass: (fn: IResolvers) => {
      // return Class.createClass()
      return Class({
        action: {
          type: 'deleteClass'
        }
      }, fn.context)
    },
    updateClass: (fn: IResolvers) => {
      // return Class.updateClass()
      return Class({
        action: {
          type: 'deleteClass'
        }
      }, fn.context)
    },
    deleteClass: (fn: IResolvers) => {
      // return Class.deleteClass()
      return Class({
        action: {
          type: 'deleteClass'
        }
      }, fn.context)
    },
    createAssignment: (fn: IResolvers) => {
      // return Assignment.createAssignment()
    },
    updateAssignment: (fn: IResolvers) => {
      // return Assignment.updateAssignment()
    },
    deleteAssignment: (fn: IResolvers) => {
      // return Assignment.deleteAssignment()
    },
    createGrade: (fn: IResolvers) => {
      // return Grade.createGrade()
    },
    updateGrade: (fn: IResolvers) => {
      // return Grade.updateGrade()
    },
    deleteGrade: (fn: IResolvers) => {
      // return Grade.deleteGrade()
    },
  }
}

export default resolvers
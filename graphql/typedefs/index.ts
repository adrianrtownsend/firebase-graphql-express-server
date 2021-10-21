import { gql } from 'apollo-server-express'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  enum ClassStatus {
    CLOSED
    OPEN
    INACTIVE
  }

  enum ClassStudentStatus {
    PENDING
    ENROLLED
    DENIED
  }

  enum AssignmentStatus {
    CLOSED
    OPEN
    INACTIVE
  }

  enum GradeCode {
    A
    B
    C
    D
    F
  }

  type ID {
    ID: String!
  }

  type ObjectName {
    name: String
  }

  type PersonName {
    first: String
    last: String
  }

  type Book {
    title: String
    author: String
  }

  type Teacher {
    id: ID
    name: PersonName
    username: String
    image: String
    classes: [String]
    ownerUID: String
  }

  type Student {
    id: ID
    name: PersonName
    username: String
    image: String
    classes: [String]
    grades: [String]
    ownerUID: String
  }

  type ClassTeacher {
    name: PersonName
    teacherID: ID
  }

  type ClassStudent {
    name: PersonName
    studentID: ID
    status: ClassStudentStatus
  }

  type ClassLimit {
    requests: Int!
    size: Int!
  }

  type Assignment {
    code: String
    dueDate: String
    name: ObjectName
    points: Int
    status: AssignmentStatus
  }

  type Class {
    id: String
    name: String
    status: ClassStatus
    code: String
    teacher: ClassTeacher
    assignments: [Assignment]
    students: [ClassStudent]
    limit: ClassLimit
  }

  input inputID {
    ID: String!
  }

  input inputUsername {
    username: String!
  }

  input inputName {
    first: String
    last: String
  }

  input inputOwnerUID {
    ownerUID: String!
  }

  input createStudentInput {
    name: inputName!
    username: inputUsername!
    ownerUID: inputOwnerUID!
  }

  input listStudentsInput {
    id: ID
  }

  input listStudentsFilter {
    id: ID
  }

  input updateStudentInput {
    id: ID
    name: inputName
    username: inputUsername
  }

  input createTeacherInput {
    name: inputName!
    username: inputUsername!
    ownerUID: inputOwnerUID!
  }

  input listTeachersInput {
    id: ID
  }

  input listTeachersFilter {
    id: ID
  }

  input updateTeacherInput {
    id: ID
  }

  input createClassInput {
    name: inputName!
    username: inputUsername!
    ownerUID: inputOwnerUID!
  }

  input listClasssesInput {
    id: ID
  }

  input listClasssesFilter {
    id: ID
  }

  input updateClassInput {
    id: ID
  }

  input createAssignmentsInput {
    name: inputName!
    username: inputUsername!
    ownerUID: inputOwnerUID!
  }

  input listAssignmentssInput {
    id: ID
  }

  input listAssignmentssFilter {
    id: ID
  }

  input updateAssignmentsInput {
    id: ID
  }

  input createGradeInput {
    name: inputName!
    username: inputUsername!
    ownerUID: inputOwnerUID!
  }

  input listGradesInput {
    id: ID
  }

  input listGradesFilter {
    id: ID
  }

  input updateGradeInput {
    id: ID
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    listStudents: [Student]
    getStudent(id: inputID!): Student
    listTeachers: [Teacher]
    getTeacher(id: inputID!): Teacher
    listClasses: [Class]
    getClass(id: inputID!): Class
    listAssignments: [Student]
    getAssignment(id: inputID!): Student
    listGrades: [Student]
    getGrade(id: inputID!): Student
  }

  # type Mutation
  type Mutation {
    createStudent(input: createStudentInput!): Student
    updateStudent(id: inputID!, input: updateStudentInput!): Student
    deleteStudent(id: inputID!): Student
    createTeacher(input: createTeacherInput!): Teacher
    updateTeacher: Teacher
    deleteTeacher(id: inputID!): Teacher
    createClass:Class
    updateClass(id: inputID!, input: updateClassInput!): Class
    deleteClass: Class
    createAssignment: Student
    updateAssignment: Student
    deleteAssignment(id: inputID!): Student
    createGrade: Student
    updateGrade: Student
    deleteGrade(id: inputID!): Student
  }

  # type Subscription
`;

export default typeDefs
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

interface Teacher {
  id: string
  name: PersonName
  username: string
  image?: string
  classes?: [ClassKey]
  ownerUID?: string
}

export interface Student {
  id: string
  name: PersonName
  username: string
  image?: string
  classes?: [ClassKey]
  grades?: [Grade]
  ownerUID?: string
}

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

interface Class {
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
export const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
]

export const students = [
  {
    id:"1",
    name: {
      first: "john",
      last: "smith"
    },
    ownerUID: "1",
    username: "johnsmith",
    classes: ["1","2"],
    grades: [
      {
        gradeID: "101",
        type: "student",
        code: "A",
        percent: 95,
        points: 100,
        score: 95
      },
      {
        gradeID: "102",
        type: "student",
        code: "C",
        percent: 72,
        points: 100,
        score: 72
      }
    ],
    image: ""
  },
  {
    id:"2",
    name: {
      first: "mary",
      last: "jane"
    },
    ownerUID: "2",
    username: "maryjane",
    classes: ["2","3"],
    grades: [
      {
        gradeID: "103",
        type: "student",
        code: "B",
        percent: 88,
        points: 100,
        score: 88
      },
      {
        gradeID: "104",
        type: "student",
        code: "A",
        percent: 90,
        points: 100,
        score: 90
      }
    ],
    image: ""
  }
]

export const teachers = [
  {
    id:"1",
    name: {
      first: "stan",
      last: "smith"
    },
    ownerUID: "3",
    username: "stansmith",
    classes: ["1", "3"],
    image: ""
  },
  {
    id:"2",
    name: {
      first: "bonnie",
      last: "swanson"
    },
    ownerUID: "4",
    username: "bonnieswanson",
    classes: ["2", "4"],
    image: ""
  }
]

export const classes = [
  {
    id: "1",
    code: "MATH101",
    name: "Basic Math",
    status: "OPEN",
    teacher: {
      name: {
        first: "stan",
        last: "smith"
      },
      teacherID: "1"
    },
    assignments: [
      {
        id: "1",
        code: "MATH1012001",
        dueDate: "",
        name: "Basic Math - First Assignment",
        points: 100,
        status: "OPEN"
      }
    ],
    students: [
      {
        grade: {
          code: "A",
          percent: 95,
          points: 100,
          score: 95
        },
        grades: [
          {
            assignmentID: "MATH102001",
            code: "A",
            percent: 95,
            points: 100,
            score: 95
          }
        ],
        name: {
          first: "john",
          last: "smith"
        },
        status: "ENROLLED",
        studentID: "1"
      }
    ]
  },
  {
    id: "2",
    code: "MATH102",
    name: "Intermediate Math",
    status: "OPEN",
    teacher: {
      name: {
        first: "bonnie",
        last: "swanson"
      },
      teacherID: "2"
    },
    assignments: [
      {
        id: "2",
        code: "MATH1022001",
        dueDate: "",
        name: "Intermediate Math - First Assignment",
        points: 100,
        status: "OPEN"
      }
    ],
    students: [
      {
        grade: {
          code: "C",
          percent: 72,
          points: 100,
          score: 72
        },
        grades: [
          {
            assignmentID: "MATH102001",
            code: "C",
            percent: 72,
            points: 100,
            score: 72
          }
        ],
        name: {
          first: "john",
          last: "smith"
        },
        status: "ENROLLED",
        studentID: "1"
      },
      {
        grade: {
          code: "B",
          percent: 88,
          points: 100,
          score: 88
        },
        grades: [
          {
            assignmentID: "MATH1022001",
            code: "B",
            percent: 88,
            points: 100,
            score: 88
          }
        ],
        name: {
          first: "mary",
          last: "jane"
        },
        status: "ENROLLED",
        studentId: "2"
      }
    ]
  },
  {
    id: "3",
    code: "ENG101",
    name: "Basic English",
    status: "OPEN",
    teacher: {
      name: {
        first: "stan",
        last: "smith"
      },
      teacherID: "1"
    },
    assignments: [
      {
        id: "3",
        code: "ENG1012001",
        dueDate: "",
        name: "Basic English - First Assignment",
        points: 100,
        status: "OPEN"
      }
    ],
    students: [
      {
        grade: {
          code: "A",
          percent: 90,
          points: 100,
          score: 90
        },
        grades: [
          {
            assignmentID: "ENG101001",
            code: "A",
            percent: 90,
            points: 100,
            score: 90
          }
        ],
        name: {
          first: "mary",
          last: "jane"
        },
        status: "ENROLLED",
        studentID: "2"
      }
    ]
  },
  {
    id: "4",
    code: "ENG102",
    name: "Intermediate English",
    status: "INACTIVE",
    teacher: {
      name: {
        first: "bonnie",
        last: "swanson"
      },
      teacherID: "2"
    },
    assignments: [],
    students: []
  }
]
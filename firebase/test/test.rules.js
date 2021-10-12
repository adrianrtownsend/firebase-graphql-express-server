import fs from 'fs'
import { setDoc, doc } from 'firebase/firestore'
import * as testing from '@firebase/rules-unit-testing'

const {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} = testing

/**
 *  
*/
const PROJECT_ID = 'test-firestore-rules-project'

/*const seeds = {
  students: {
    one: {},
    two: {},
    extra: {}
  },
  teachers: {
    one: {},
    two: {},
    extra: {}
  },
  classes: {
    one: {},
    two: {},
    extra: {}
  }
}*/

let testEnv

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      host: 'localhost',
      port: 8080,
      rules: fs.readFileSync('firestore.rules', 'utf8'),
    },
  })
})

beforeEach(async () => {
  await testEnv.clearFirestore()
})

after(async () => {
  await testEnv.cleanup()
})

// Unit test student security rules
describe('students', async () => {

  it('is auth | role student | is owner | can read, write', async () => { 

    const auths = {
      students: {
        one: {
          uid: 'studentOne',
          email: 'studentOne@mail.com'
        },
        two: {
          uid: 'studentTwo',
          email: 'studentTwo@mail.com'
        }
      },
      teachers: {
        one: {
          uid: 'teacherOne',
          email: 'teacherOne@mail.com'
        },
        two: {
          uid: 'teacherTwo',
          email: 'teacherTwo@mail.com'
        }
      }
    }

    const studentOne = testEnv.authenticatedContext('studentOne', {
      role: 'student'
    }).firestore()
  
    const studentTwo = testEnv.authenticatedContext('studentTwo', {
      role: 'student'
    }).firestore()
  
    const teacherOne = testEnv.authenticatedContext('teacherOne', {
      role: 'teacher'
    }).firestore()
  
    const teacherTwo = testEnv.authenticatedContext('teacherTwo', {
      role: 'teacher'
    }).firestore()

    // Student one can read and write self
    await assertSucceeds(setDoc(doc(studentOne, '/students/studentOne'), {
      ownerUID: 'studentOne',
      name: { first: 'mark', last: 'smith' }
      }
    ))

    // Student two can read and write self
    await assertSucceeds(
      setDoc(doc(studentTwo, '/students/studentTwo'), {
      ownerUID: 'studentTwo',
      name: { first: 'mark', last: 'smith' }
      }
    ))

    // Neither Students can write each other
    await assertFails(setDoc(doc(studentOne, '/students/studentTwo'), {
      ownerUID: 'studentOne',
      name: { first: 'mark', last: 'smith' }
      }
    ))

  })

  //it('is auth | role teacher | can read only', async () => {})

})
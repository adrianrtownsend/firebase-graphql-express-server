import api from './graphql'

const main = async () => {
  try {
    await api()
  } catch(e) {
    console.error('Error: ', e)
  }
}

main()
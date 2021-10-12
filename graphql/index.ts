import { ApolloServer } from 'apollo-server-express'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import express from 'express'
import http from 'http'

import schema from './schema'
import { port } from '../config'

const api = async () => {

  const app = express()

  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    schema,
    plugins: [{
      async serverWillStart() {
        return {
          async drainServer() {
            subscriptionServer.close();
          }
        };
      }
    }],
  })

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  await server.start();
  server.applyMiddleware({ app });

  await new Promise((resolve: any) => httpServer.listen({ port: port }, resolve))
  console.log('Server ready at port: ', port)
}

export default api
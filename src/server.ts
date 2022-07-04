import { ApolloServer, ExpressContext } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { WebSocketServer } from 'ws';
import { resolvers } from './generated/graphql';
import customAuthChecker from './utils/customAuthChecker';
import { Resolve } from './config/authConfig';
import { customFieldResolvers } from './custom_resolvers/Fields/index';
import { graphQLContext, webSocketContext } from './context/context';
import { httpServer } from './app';
import { customResolvers } from './custom_resolvers/resolvers';

const createServer = async (): Promise<ApolloServer<ExpressContext>> => {
  Resolve();

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/websocket',
  });

  const schema = await buildSchema({
    resolvers: [...resolvers, ...customResolvers, ...customFieldResolvers],
    validate: false,
    authChecker: customAuthChecker,
  });

  const serverCleanup = useServer(
    {
      schema,
      context: (ctx, msg, args) => webSocketContext(ctx, msg, args),
    },
    wsServer
  );

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => graphQLContext({ req, res }),
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled
        : ApolloServerPluginLandingPageGraphQLPlayground,
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],

    introspection: true,
  });
  return server;
};

export default createServer;

import { postgraphile } from 'postgraphile';
import { ApolloServer } from 'apollo-server-micro';
import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const postgraphileOptions = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
};

const startServer = async () => {
  const schema = await createPostGraphileSchema(
    pool,
    'public',
    postgraphileOptions
  );

  const apolloServer = new ApolloServer({
    schema,
  });

  const handler = apolloServer.createHandler({ path: '/api/graphql' });

  export const config = {
    api: {
      bodyParser: false,
    },
  };

  export default handler;
};

startServer().catch(error => console.error('Failed to start server:', error));

import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
export function startApolo({ typeDefs, resolvers }) {
  mongoose
    .connect('mongodb://mongo_db:27017/crud-graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('connected database 🆗'));

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server on ${url} 🔥🔥🚒`));
}

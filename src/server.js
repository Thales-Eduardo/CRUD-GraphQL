import { startApolo } from './app';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

startApolo({ typeDefs, resolvers });

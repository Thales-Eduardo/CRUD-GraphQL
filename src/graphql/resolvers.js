import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import path from 'path';

const resolversArray = loadFilesSync(
  path.join(__dirname, '..', 'modules', '**', 'resolvers.js'),
);

const mergeTypes = mergeResolvers(resolversArray);

export default mergeTypes;

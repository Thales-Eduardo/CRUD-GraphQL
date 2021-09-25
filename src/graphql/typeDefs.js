import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';

const typesArray = loadFilesSync(
  path.join(__dirname, '..', 'modules', '**', '*.gql'),
);

const mergeArray = mergeTypeDefs(typesArray);
console.log(mergeArray);
export default mergeArray;

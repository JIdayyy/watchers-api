/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as CommentFieldImports from './Comment';

const CommentFieldResolvers = Object.values(
  CommentFieldImports
) as unknown as NonEmptyArray<Function>;

export const customFieldResolvers = [
  ...CommentFieldResolvers,
] as unknown as NonEmptyArray<Function>;

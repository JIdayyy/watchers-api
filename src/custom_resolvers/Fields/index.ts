/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as CommentFieldImports from './Comment';
import * as LikeFieldImports from './Like';

const CommentFieldResolvers = Object.values(
  CommentFieldImports
) as unknown as NonEmptyArray<Function>;

const LikeFieldResolvers = Object.values(
  LikeFieldImports
) as unknown as NonEmptyArray<Function>;

export const customFieldResolvers = [
  ...CommentFieldResolvers,
  ...LikeFieldResolvers,
] as unknown as NonEmptyArray<Function>;

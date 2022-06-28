/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as AuthResolversImport from './Authentication';
import * as UploadResolversImport from './Upload';
import * as SearchResolverImport from './Search/index';

const CustomAuthResolvers = Object.values(
  AuthResolversImport
) as unknown as NonEmptyArray<Function>;

const CustomUploadResolvers = Object.values(
  UploadResolversImport
) as unknown as NonEmptyArray<Function>;

const CustomSearchResolvers = Object.values(
  SearchResolverImport
) as unknown as NonEmptyArray<Function>;

export const customResolvers = [
  ...CustomAuthResolvers,
  ...CustomUploadResolvers,
  ...CustomSearchResolvers,
] as unknown as NonEmptyArray<Function>;

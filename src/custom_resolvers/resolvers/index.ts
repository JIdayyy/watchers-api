/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as AuthResolversImport from './Authentication';
import * as UploadResolversImport from './Upload';

const CustomAuthResolvers = Object.values(
  AuthResolversImport
) as unknown as NonEmptyArray<Function>;

const CustomUploadResolvers = Object.values(
  UploadResolversImport
) as unknown as NonEmptyArray<Function>;

export const customResolvers = [
  ...CustomAuthResolvers,
  ...CustomUploadResolvers,
] as unknown as NonEmptyArray<Function>;

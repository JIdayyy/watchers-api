/* eslint-disable @typescript-eslint/no-explicit-any */
import { GQLContext } from '@src/interfaces';
import { ApolloError } from 'apollo-server-core';
import { NextFn } from 'type-graphql';

const checkIfOwner = async (
  {
    args,
    context,
  }: {
    args: any;
    context: GQLContext;
  },
  next: NextFn
): Promise<void> => {
  if (!context.user) {
    throw new ApolloError('U have to be loged in');
  }

  if (context.user?.role.includes('SUPER_ADMIN' || 'ADMIN')) {
    return next();
  }

  const projectId = args.where.id;

  const project = await context.prisma.post.findUnique({
    where: {
      id: projectId,
    },
    rejectOnNotFound: true,
  });

  if (context.user.id !== project.userId) {
    throw new ApolloError('Only post author can update project');
  }

  return next();
};

export default checkIfOwner;

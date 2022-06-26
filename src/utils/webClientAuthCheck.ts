import { PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';
import Cookies from 'cookies';
import { Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

const webClientAuthCheck = async (
  context: {
    req: Request;
    res: Response;
    prisma: PrismaClient;
  },
  roles: string[]
): Promise<boolean | Error> => {
  const cookies = new Cookies(context.req, context.res, {
    secure: process.env.NODE_ENV === 'production',
  });

  const cookieName = 'token';

  console.log(cookies.get(cookieName));

  const token = context.req.cookies
    ? context.req.cookies[cookieName]
    : cookies.get(cookieName);

  if (!token) throw new ApolloError('U have to be logged in');

  const user = verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  if (!user) throw new ApolloError('U have to be logged in');
  console.log(roles, user.roles);
  if (roles.find((role) => user.roles === role)) return true;

  throw new ApolloError('Acces denied');
};

export default webClientAuthCheck;

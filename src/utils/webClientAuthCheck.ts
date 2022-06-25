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
  const cookies = new Cookies(context.req, context.res);

  const token = context.req.cookies
    ? context.req.cookies.token
    : cookies.get('token')
    ? context.req.cookies['__Secure-next-auth.session-token']
    : cookies.get('__Secure-next-auth.session-token');

  const nextCookie = context.req.cookies
    ? context.req.cookies['next-auth.session-token']
    : cookies.get('next-auth.session-token');

  if (!token) throw new ApolloError('U have to be logged in');

  const user = verify(token, process.env.JWT_SECRET as string) as JwtPayload;

  if (!user) throw new ApolloError('U have to be logged in');
  console.log(roles, user.roles);
  if (roles.find((role) => user.roles === role)) return true;

  throw new ApolloError('Acces denied');
};

export default webClientAuthCheck;

/* eslint-disable @typescript-eslint/naming-convention */

import { PrismaClient } from '@prisma/client';

export type TJWT_PAYLOAD = {
  email: string;
  id: string;
  role: string[];
};

export interface GQLContext {
  req: Request<
    ParamsDictionary,
    any,
    any,
    QueryString.ParsedQs,
    Record<string, any>
  >;
  res: Response<any, Record<string, any>>;
  prisma: PrismaClient;
  user?: TJWT_PAYLOAD;
  pubsub: PubSub;
}

export interface WebsocketContext {
  ctx: Context<
    Record<string, unknown> | undefined,
    Extra & Partial<Record<PropertyKey, never>>
  >;
  msg: SubscribeMessage;
  args: ExecutionArgs;
  user?: TJWT_PAYLOAD;
  prisma: PrismaClient;
}

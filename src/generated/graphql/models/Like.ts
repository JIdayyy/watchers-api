import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { Reply } from "../models/Reply";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Like", {
  isAbstract: true
})
export class Like {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_id?: string | null;

  post?: Post | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  user?: User;

  reply?: Reply | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reply_id?: string | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { User } from "../models/User";
import { ReplyCount } from "../resolvers/outputs/ReplyCount";

@TypeGraphQL.ObjectType("Reply", {
  isAbstract: true
})
export class Reply {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture?: string | null;

  author?: User;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  Comment?: Comment;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  commentId!: string;

  Like?: Like[];

  @TypeGraphQL.Field(_type => ReplyCount, {
    nullable: true
  })
  _count?: ReplyCount | null;
}

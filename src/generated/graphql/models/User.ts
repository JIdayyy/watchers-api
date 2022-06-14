import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { Post } from "../models/Post";
import { Reply } from "../models/Reply";
import { ResetPassword } from "../models/ResetPassword";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  password?: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | null;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: false
  })
  role!: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER">;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  ResetPassword?: ResetPassword[];

  Post?: Post[];

  Comment?: Comment[];

  Reply?: Reply[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nickname!: string;

  Like?: Like[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}

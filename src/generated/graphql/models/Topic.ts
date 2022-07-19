import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Article } from "../models/Article";
import { ForumCategory } from "../models/ForumCategory";
import { User } from "../models/User";
import { TopicCount } from "../resolvers/outputs/TopicCount";

@TypeGraphQL.ObjectType("Topic", {
  isAbstract: true
})
export class Topic {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  forum_category?: ForumCategory;

  articles?: Article[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  moderators?: User[];

  @TypeGraphQL.Field(_type => TopicCount, {
    nullable: true
  })
  _count?: TopicCount | null;
}

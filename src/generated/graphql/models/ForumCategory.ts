import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Forum } from "../models/Forum";
import { Topic } from "../models/Topic";
import { ForumCategoryCount } from "../resolvers/outputs/ForumCategoryCount";

@TypeGraphQL.ObjectType("ForumCategory", {
  isAbstract: true
})
export class ForumCategory {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  forum?: Forum;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  forum_id!: string;

  topics?: Topic[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => ForumCategoryCount, {
    nullable: true
  })
  _count?: ForumCategoryCount | null;
}

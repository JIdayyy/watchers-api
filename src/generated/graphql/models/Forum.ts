import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ForumCategory } from "../models/ForumCategory";
import { Role } from "../enums/Role";
import { ForumCount } from "../resolvers/outputs/ForumCount";

@TypeGraphQL.ObjectType("Forum", {
  isAbstract: true
})
export class Forum {
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

  forum_categories?: ForumCategory[];

  @TypeGraphQL.Field(_type => [Role], {
    nullable: false
  })
  roles!: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER">;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => ForumCount, {
    nullable: true
  })
  _count?: ForumCount | null;
}

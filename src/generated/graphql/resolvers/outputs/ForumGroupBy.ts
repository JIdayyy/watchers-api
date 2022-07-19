import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCountAggregate } from "../outputs/ForumCountAggregate";
import { ForumMaxAggregate } from "../outputs/ForumMaxAggregate";
import { ForumMinAggregate } from "../outputs/ForumMinAggregate";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("ForumGroupBy", {
  isAbstract: true
})
export class ForumGroupBy {
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

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  roles!: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER"> | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => ForumCountAggregate, {
    nullable: true
  })
  _count!: ForumCountAggregate | null;

  @TypeGraphQL.Field(_type => ForumMinAggregate, {
    nullable: true
  })
  _min!: ForumMinAggregate | null;

  @TypeGraphQL.Field(_type => ForumMaxAggregate, {
    nullable: true
  })
  _max!: ForumMaxAggregate | null;
}

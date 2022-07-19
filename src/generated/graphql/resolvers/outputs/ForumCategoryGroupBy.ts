import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCountAggregate } from "../outputs/ForumCategoryCountAggregate";
import { ForumCategoryMaxAggregate } from "../outputs/ForumCategoryMaxAggregate";
import { ForumCategoryMinAggregate } from "../outputs/ForumCategoryMinAggregate";

@TypeGraphQL.ObjectType("ForumCategoryGroupBy", {
  isAbstract: true
})
export class ForumCategoryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

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
  forum_id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => ForumCategoryCountAggregate, {
    nullable: true
  })
  _count!: ForumCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => ForumCategoryMinAggregate, {
    nullable: true
  })
  _min!: ForumCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => ForumCategoryMaxAggregate, {
    nullable: true
  })
  _max!: ForumCategoryMaxAggregate | null;
}

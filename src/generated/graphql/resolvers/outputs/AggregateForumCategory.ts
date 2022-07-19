import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCountAggregate } from "../outputs/ForumCategoryCountAggregate";
import { ForumCategoryMaxAggregate } from "../outputs/ForumCategoryMaxAggregate";
import { ForumCategoryMinAggregate } from "../outputs/ForumCategoryMinAggregate";

@TypeGraphQL.ObjectType("AggregateForumCategory", {
  isAbstract: true
})
export class AggregateForumCategory {
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

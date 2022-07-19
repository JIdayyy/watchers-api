import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCountAggregate } from "../outputs/ForumCountAggregate";
import { ForumMaxAggregate } from "../outputs/ForumMaxAggregate";
import { ForumMinAggregate } from "../outputs/ForumMinAggregate";

@TypeGraphQL.ObjectType("AggregateForum", {
  isAbstract: true
})
export class AggregateForum {
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

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCountAggregate } from "../outputs/TopicCountAggregate";
import { TopicMaxAggregate } from "../outputs/TopicMaxAggregate";
import { TopicMinAggregate } from "../outputs/TopicMinAggregate";

@TypeGraphQL.ObjectType("TopicGroupBy", {
  isAbstract: true
})
export class TopicGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => TopicCountAggregate, {
    nullable: true
  })
  _count!: TopicCountAggregate | null;

  @TypeGraphQL.Field(_type => TopicMinAggregate, {
    nullable: true
  })
  _min!: TopicMinAggregate | null;

  @TypeGraphQL.Field(_type => TopicMaxAggregate, {
    nullable: true
  })
  _max!: TopicMaxAggregate | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceCountAggregate } from "../outputs/PreferenceCountAggregate";
import { PreferenceMaxAggregate } from "../outputs/PreferenceMaxAggregate";
import { PreferenceMinAggregate } from "../outputs/PreferenceMinAggregate";

@TypeGraphQL.ObjectType("AggregatePreference", {
  isAbstract: true
})
export class AggregatePreference {
  @TypeGraphQL.Field(_type => PreferenceCountAggregate, {
    nullable: true
  })
  _count!: PreferenceCountAggregate | null;

  @TypeGraphQL.Field(_type => PreferenceMinAggregate, {
    nullable: true
  })
  _min!: PreferenceMinAggregate | null;

  @TypeGraphQL.Field(_type => PreferenceMaxAggregate, {
    nullable: true
  })
  _max!: PreferenceMaxAggregate | null;
}

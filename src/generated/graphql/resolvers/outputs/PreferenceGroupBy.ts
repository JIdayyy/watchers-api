import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PreferenceCountAggregate } from "../outputs/PreferenceCountAggregate";
import { PreferenceMaxAggregate } from "../outputs/PreferenceMaxAggregate";
import { PreferenceMinAggregate } from "../outputs/PreferenceMinAggregate";

@TypeGraphQL.ObjectType("PreferenceGroupBy", {
  isAbstract: true
})
export class PreferenceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  showEmail!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  skills!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color_1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color_2!: string | null;

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
  userId!: string;

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

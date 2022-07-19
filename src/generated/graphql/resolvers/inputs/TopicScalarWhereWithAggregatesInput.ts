import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TopicScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TopicScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TopicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TopicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TopicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TopicScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_disabled?: BoolWithAggregatesFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReplyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReplyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReplyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReplyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReplyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReplyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  picture?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  commentId?: StringWithAggregatesFilter | undefined;
}

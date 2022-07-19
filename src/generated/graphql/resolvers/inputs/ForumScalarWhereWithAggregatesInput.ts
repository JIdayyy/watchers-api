import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumRoleNullableListFilter } from "../inputs/EnumRoleNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ForumScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ForumScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ForumScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ForumScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ForumScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ForumScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EnumRoleNullableListFilter, {
    nullable: true
  })
  roles?: EnumRoleNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  is_disabled?: BoolWithAggregatesFilter | undefined;
}

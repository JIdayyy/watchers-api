import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  post_id?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_id?: StringWithAggregatesFilter | undefined;
}

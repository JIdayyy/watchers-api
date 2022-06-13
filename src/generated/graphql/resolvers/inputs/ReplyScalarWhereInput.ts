import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ReplyScalarWhereInput", {
  isAbstract: true
})
export class ReplyScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReplyScalarWhereInput], {
    nullable: true
  })
  AND?: ReplyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarWhereInput], {
    nullable: true
  })
  OR?: ReplyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyScalarWhereInput], {
    nullable: true
  })
  NOT?: ReplyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  picture?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  commentId?: StringFilter | undefined;
}

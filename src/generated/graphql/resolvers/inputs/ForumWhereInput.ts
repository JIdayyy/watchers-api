import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleNullableListFilter } from "../inputs/EnumRoleNullableListFilter";
import { ForumCategoryListRelationFilter } from "../inputs/ForumCategoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ForumWhereInput", {
  isAbstract: true
})
export class ForumWhereInput {
  @TypeGraphQL.Field(_type => [ForumWhereInput], {
    nullable: true
  })
  AND?: ForumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumWhereInput], {
    nullable: true
  })
  OR?: ForumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumWhereInput], {
    nullable: true
  })
  NOT?: ForumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryListRelationFilter, {
    nullable: true
  })
  forum_categories?: ForumCategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleNullableListFilter, {
    nullable: true
  })
  roles?: EnumRoleNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;
}

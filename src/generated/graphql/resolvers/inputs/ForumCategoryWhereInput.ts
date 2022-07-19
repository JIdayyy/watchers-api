import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ForumRelationFilter } from "../inputs/ForumRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TopicListRelationFilter } from "../inputs/TopicListRelationFilter";

@TypeGraphQL.InputType("ForumCategoryWhereInput", {
  isAbstract: true
})
export class ForumCategoryWhereInput {
  @TypeGraphQL.Field(_type => [ForumCategoryWhereInput], {
    nullable: true
  })
  AND?: ForumCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereInput], {
    nullable: true
  })
  OR?: ForumCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryWhereInput], {
    nullable: true
  })
  NOT?: ForumCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  icon?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ForumRelationFilter, {
    nullable: true
  })
  forum?: ForumRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  forum_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TopicListRelationFilter, {
    nullable: true
  })
  topics?: TopicListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;
}

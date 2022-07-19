import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleListRelationFilter } from "../inputs/ArticleListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ForumCategoryRelationFilter } from "../inputs/ForumCategoryRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("TopicWhereInput", {
  isAbstract: true
})
export class TopicWhereInput {
  @TypeGraphQL.Field(_type => [TopicWhereInput], {
    nullable: true
  })
  AND?: TopicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereInput], {
    nullable: true
  })
  OR?: TopicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereInput], {
    nullable: true
  })
  NOT?: TopicWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ForumCategoryRelationFilter, {
    nullable: true
  })
  forum_category?: ForumCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ArticleListRelationFilter, {
    nullable: true
  })
  articles?: ArticleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  moderators?: UserListRelationFilter | undefined;
}

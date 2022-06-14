import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRelationFilter } from "../inputs/CommentRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReplyWhereInput", {
  isAbstract: true
})
export class ReplyWhereInput {
  @TypeGraphQL.Field(_type => [ReplyWhereInput], {
    nullable: true
  })
  AND?: ReplyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereInput], {
    nullable: true
  })
  OR?: ReplyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReplyWhereInput], {
    nullable: true
  })
  NOT?: ReplyWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => CommentRelationFilter, {
    nullable: true
  })
  Comment?: CommentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  commentId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => LikeListRelationFilter, {
    nullable: true
  })
  Like?: LikeListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { ReplyRelationFilter } from "../inputs/ReplyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("LikeWhereInput", {
  isAbstract: true
})
export class LikeWhereInput {
  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  AND?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  OR?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  NOT?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  post_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReplyRelationFilter, {
    nullable: true
  })
  reply?: ReplyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reply_id?: StringNullableFilter | undefined;
}

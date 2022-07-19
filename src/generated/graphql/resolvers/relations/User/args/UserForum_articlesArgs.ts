import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleOrderByWithRelationInput } from "../../../inputs/ArticleOrderByWithRelationInput";
import { ArticleWhereInput } from "../../../inputs/ArticleWhereInput";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";
import { ArticleScalarFieldEnum } from "../../../../enums/ArticleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserForum_articlesArgs {
  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  where?: ArticleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArticleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ArticleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArticleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ArticleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "content" | "created_at" | "updated_at" | "author_id" | "is_disabled"> | undefined;
}

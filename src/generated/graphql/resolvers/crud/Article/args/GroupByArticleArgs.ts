import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleOrderByWithAggregationInput } from "../../../inputs/ArticleOrderByWithAggregationInput";
import { ArticleScalarWhereWithAggregatesInput } from "../../../inputs/ArticleScalarWhereWithAggregatesInput";
import { ArticleWhereInput } from "../../../inputs/ArticleWhereInput";
import { ArticleScalarFieldEnum } from "../../../../enums/ArticleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArticleArgs {
  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  where?: ArticleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArticleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ArticleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "content" | "created_at" | "updated_at" | "author_id" | "is_disabled">;

  @TypeGraphQL.Field(_type => ArticleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArticleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

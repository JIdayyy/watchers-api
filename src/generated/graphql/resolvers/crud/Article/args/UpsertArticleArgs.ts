import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleCreateInput } from "../../../inputs/ArticleCreateInput";
import { ArticleUpdateInput } from "../../../inputs/ArticleUpdateInput";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertArticleArgs {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArticleCreateInput, {
    nullable: false
  })
  create!: ArticleCreateInput;

  @TypeGraphQL.Field(_type => ArticleUpdateInput, {
    nullable: false
  })
  update!: ArticleUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleUpdateInput } from "../../../inputs/ArticleUpdateInput";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateArticleArgs {
  @TypeGraphQL.Field(_type => ArticleUpdateInput, {
    nullable: false
  })
  data!: ArticleUpdateInput;

  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;
}

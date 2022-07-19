import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleCreateInput } from "../../../inputs/ArticleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateArticleArgs {
  @TypeGraphQL.Field(_type => ArticleCreateInput, {
    nullable: false
  })
  data!: ArticleCreateInput;
}

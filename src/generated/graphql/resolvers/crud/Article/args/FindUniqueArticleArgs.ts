import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueArticleArgs {
  @TypeGraphQL.Field(_type => ArticleWhereUniqueInput, {
    nullable: false
  })
  where!: ArticleWhereUniqueInput;
}

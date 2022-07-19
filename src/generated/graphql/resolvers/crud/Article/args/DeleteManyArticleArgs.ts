import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleWhereInput } from "../../../inputs/ArticleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArticleArgs {
  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  where?: ArticleWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleCreateManyInput } from "../../../inputs/ArticleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArticleArgs {
  @TypeGraphQL.Field(_type => [ArticleCreateManyInput], {
    nullable: false
  })
  data!: ArticleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleUpdateManyMutationInput } from "../../../inputs/ArticleUpdateManyMutationInput";
import { ArticleWhereInput } from "../../../inputs/ArticleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArticleArgs {
  @TypeGraphQL.Field(_type => ArticleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArticleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArticleWhereInput, {
    nullable: true
  })
  where?: ArticleWhereInput | undefined;
}

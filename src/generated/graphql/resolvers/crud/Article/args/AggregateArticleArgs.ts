import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticleOrderByWithRelationInput } from "../../../inputs/ArticleOrderByWithRelationInput";
import { ArticleWhereInput } from "../../../inputs/ArticleWhereInput";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateArticleArgs {
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
}

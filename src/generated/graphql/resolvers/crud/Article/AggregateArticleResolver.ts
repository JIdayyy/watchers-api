import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArticleArgs } from "./args/AggregateArticleArgs";
import { Article } from "../../../models/Article";
import { AggregateArticle } from "../../outputs/AggregateArticle";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Article)
export class AggregateArticleResolver {
  @TypeGraphQL.Query(_returns => AggregateArticle, {
    nullable: false
  })
  async aggregateArticle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArticleArgs): Promise<AggregateArticle> {
    return getPrismaFromContext(ctx).article.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

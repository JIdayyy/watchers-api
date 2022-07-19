import * as TypeGraphQL from "type-graphql";
import { Article } from "../../../models/Article";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Article)
export class ArticleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Topic, {
    nullable: false
  })
  async topic(@TypeGraphQL.Root() article: Article, @TypeGraphQL.Ctx() ctx: any): Promise<Topic> {
    return getPrismaFromContext(ctx).article.findUnique({
      where: {
        id: article.id,
      },
    }).topic({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() article: Article, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).article.findUnique({
      where: {
        id: article.id,
      },
    }).author({});
  }
}

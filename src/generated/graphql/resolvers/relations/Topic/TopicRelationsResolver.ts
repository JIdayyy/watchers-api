import * as TypeGraphQL from "type-graphql";
import { Article } from "../../../models/Article";
import { ForumCategory } from "../../../models/ForumCategory";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { TopicArticlesArgs } from "./args/TopicArticlesArgs";
import { TopicModeratorsArgs } from "./args/TopicModeratorsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Topic)
export class TopicRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ForumCategory, {
    nullable: false
  })
  async forum_category(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any): Promise<ForumCategory> {
    return getPrismaFromContext(ctx).topic.findUnique({
      where: {
        id: topic.id,
      },
    }).forum_category({});
  }

  @TypeGraphQL.FieldResolver(_type => [Article], {
    nullable: false
  })
  async articles(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TopicArticlesArgs): Promise<Article[]> {
    return getPrismaFromContext(ctx).topic.findUnique({
      where: {
        id: topic.id,
      },
    }).articles(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async moderators(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TopicModeratorsArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).topic.findUnique({
      where: {
        id: topic.id,
      },
    }).moderators(args);
  }
}

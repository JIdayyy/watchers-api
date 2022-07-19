import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateForumCategoryArgs } from "./args/AggregateForumCategoryArgs";
import { ForumCategory } from "../../../models/ForumCategory";
import { AggregateForumCategory } from "../../outputs/AggregateForumCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ForumCategory)
export class AggregateForumCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateForumCategory, {
    nullable: false
  })
  async aggregateForumCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateForumCategoryArgs): Promise<AggregateForumCategory> {
    return getPrismaFromContext(ctx).forumCategory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

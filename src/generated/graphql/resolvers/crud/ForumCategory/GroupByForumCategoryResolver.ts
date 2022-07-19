import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByForumCategoryArgs } from "./args/GroupByForumCategoryArgs";
import { ForumCategory } from "../../../models/ForumCategory";
import { ForumCategoryGroupBy } from "../../outputs/ForumCategoryGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ForumCategory)
export class GroupByForumCategoryResolver {
  @TypeGraphQL.Query(_returns => [ForumCategoryGroupBy], {
    nullable: false
  })
  async groupByForumCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByForumCategoryArgs): Promise<ForumCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).forumCategory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

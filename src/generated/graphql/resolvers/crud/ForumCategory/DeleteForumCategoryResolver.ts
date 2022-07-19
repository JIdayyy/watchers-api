import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteForumCategoryArgs } from "./args/DeleteForumCategoryArgs";
import { ForumCategory } from "../../../models/ForumCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ForumCategory)
export class DeleteForumCategoryResolver {
  @TypeGraphQL.Mutation(_returns => ForumCategory, {
    nullable: true
  })
  async deleteForumCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteForumCategoryArgs): Promise<ForumCategory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).forumCategory.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import { Forum } from "../../../models/Forum";
import { ForumCategory } from "../../../models/ForumCategory";
import { ForumForum_categoriesArgs } from "./args/ForumForum_categoriesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Forum)
export class ForumRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ForumCategory], {
    nullable: false
  })
  async forum_categories(@TypeGraphQL.Root() forum: Forum, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ForumForum_categoriesArgs): Promise<ForumCategory[]> {
    return getPrismaFromContext(ctx).forum.findUnique({
      where: {
        id: forum.id,
      },
    }).forum_categories(args);
  }
}

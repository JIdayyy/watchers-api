import * as TypeGraphQL from "type-graphql";
import { Forum } from "../../../models/Forum";
import { ForumCategory } from "../../../models/ForumCategory";
import { Topic } from "../../../models/Topic";
import { ForumCategoryTopicsArgs } from "./args/ForumCategoryTopicsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ForumCategory)
export class ForumCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Forum, {
    nullable: false
  })
  async forum(@TypeGraphQL.Root() forumCategory: ForumCategory, @TypeGraphQL.Ctx() ctx: any): Promise<Forum> {
    return getPrismaFromContext(ctx).forumCategory.findUnique({
      where: {
        id: forumCategory.id,
      },
    }).forum({});
  }

  @TypeGraphQL.FieldResolver(_type => [Topic], {
    nullable: false
  })
  async topics(@TypeGraphQL.Root() forumCategory: ForumCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ForumCategoryTopicsArgs): Promise<Topic[]> {
    return getPrismaFromContext(ctx).forumCategory.findUnique({
      where: {
        id: forumCategory.id,
      },
    }).topics(args);
  }
}

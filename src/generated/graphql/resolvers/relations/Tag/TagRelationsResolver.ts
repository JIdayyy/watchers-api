import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { Tag } from "../../../models/Tag";
import { TagPostArgs } from "./args/TagPostArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).Post(args);
  }
}

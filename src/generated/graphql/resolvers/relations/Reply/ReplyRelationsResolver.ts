import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reply)
export class ReplyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() reply: Reply, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).reply.findUnique({
      where: {
        id: reply.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: false
  })
  async Comment(@TypeGraphQL.Root() reply: Reply, @TypeGraphQL.Ctx() ctx: any): Promise<Comment> {
    return getPrismaFromContext(ctx).reply.findUnique({
      where: {
        id: reply.id,
      },
    }).Comment({});
  }
}

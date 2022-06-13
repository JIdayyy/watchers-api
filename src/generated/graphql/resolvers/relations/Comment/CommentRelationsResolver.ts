import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
import { CommentReplyArgs } from "./args/CommentReplyArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).Post({});
  }

  @TypeGraphQL.FieldResolver(_type => [Reply], {
    nullable: false
  })
  async Reply(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentReplyArgs): Promise<Reply[]> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).Reply(args);
  }
}

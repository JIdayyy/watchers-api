import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Reply } from "../../../models/Reply";
import { ResetPassword } from "../../../models/ResetPassword";
import { User } from "../../../models/User";
import { UserCommentArgs } from "./args/UserCommentArgs";
import { UserPostArgs } from "./args/UserPostArgs";
import { UserReplyArgs } from "./args/UserReplyArgs";
import { UserResetPasswordArgs } from "./args/UserResetPasswordArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ResetPassword], {
    nullable: false
  })
  async ResetPassword(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserResetPasswordArgs): Promise<ResetPassword[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ResetPassword(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Post(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async Comment(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Comment(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Reply], {
    nullable: false
  })
  async Reply(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReplyArgs): Promise<Reply[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Reply(args);
  }
}

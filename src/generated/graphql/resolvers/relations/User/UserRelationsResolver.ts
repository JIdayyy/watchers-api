import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { Preference } from "../../../models/Preference";
import { ResetPassword } from "../../../models/ResetPassword";
import { User } from "../../../models/User";
import { UserCommentArgs } from "./args/UserCommentArgs";
import { UserLikeArgs } from "./args/UserLikeArgs";
import { UserPostArgs } from "./args/UserPostArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Like], {
    nullable: false
  })
  async Like(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikeArgs): Promise<Like[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Like(args);
  }

  @TypeGraphQL.FieldResolver(_type => Preference, {
    nullable: true
  })
  async Preference(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Preference | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Preference({});
  }
}

import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Article } from "../../../models/Article";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Preference } from "../../../models/Preference";
import { ResetPassword } from "../../../models/ResetPassword";
import { Session } from "../../../models/Session";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { UserAccountArgs } from "./args/UserAccountArgs";
import { UserCommentArgs } from "./args/UserCommentArgs";
import { UserForum_articlesArgs } from "./args/UserForum_articlesArgs";
import { UserPostArgs } from "./args/UserPostArgs";
import { UserPost_likesArgs } from "./args/UserPost_likesArgs";
import { UserResetPasswordArgs } from "./args/UserResetPasswordArgs";
import { UserSessionArgs } from "./args/UserSessionArgs";
import { UserTopics_moderatedArgs } from "./args/UserTopics_moderatedArgs";
import { UserUser_AArgs } from "./args/UserUser_AArgs";
import { UserUser_BArgs } from "./args/UserUser_BArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Account], {
    nullable: false
  })
  async Account(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAccountArgs): Promise<Account[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Account(args);
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

  @TypeGraphQL.FieldResolver(_type => [Session], {
    nullable: false
  })
  async Session(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSessionArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Session(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User_B(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_BArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).User_B(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User_A(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_AArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).User_A(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post_likes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPost_likesArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Post_likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Article], {
    nullable: false
  })
  async forum_articles(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserForum_articlesArgs): Promise<Article[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).forum_articles(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Topic], {
    nullable: false
  })
  async topics_moderated(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTopics_moderatedArgs): Promise<Topic[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).topics_moderated(args);
  }
}

import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";
import { PostCommentArgs } from "./args/PostCommentArgs";
import { PostTagsArgs } from "./args/PostTagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: true
  })
  async Category(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Category | null> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).Category({});
  }

  @TypeGraphQL.FieldResolver(_type => [Tag], {
    nullable: false
  })
  async Tags(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostTagsArgs): Promise<Tag[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).Tags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async Comment(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCommentArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).Comment(args);
  }
}

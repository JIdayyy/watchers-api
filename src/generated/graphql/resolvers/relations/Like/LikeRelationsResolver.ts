import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { Post } from "../../../models/Post";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Like)
export class LikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: true
  })
  async post(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<Post | null> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Reply, {
    nullable: true
  })
  async reply(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<Reply | null> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).reply({});
  }
}

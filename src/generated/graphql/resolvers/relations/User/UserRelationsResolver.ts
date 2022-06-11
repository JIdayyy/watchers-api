import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { ResetPassword } from "../../../models/ResetPassword";
import { User } from "../../../models/User";
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
}

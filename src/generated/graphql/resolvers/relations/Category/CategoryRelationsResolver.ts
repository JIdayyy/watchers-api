import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Post } from "../../../models/Post";
import { CategoryPostArgs } from "./args/CategoryPostArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).Post(args);
  }
}

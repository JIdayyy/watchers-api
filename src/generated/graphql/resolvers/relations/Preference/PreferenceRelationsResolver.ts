import * as TypeGraphQL from "type-graphql";
import { Preference } from "../../../models/Preference";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Preference)
export class PreferenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() preference: Preference, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).preference.findUnique({
      where: {
        id: preference.id,
      },
    }).User({});
  }
}

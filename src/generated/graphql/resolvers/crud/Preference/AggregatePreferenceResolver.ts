import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePreferenceArgs } from "./args/AggregatePreferenceArgs";
import { Preference } from "../../../models/Preference";
import { AggregatePreference } from "../../outputs/AggregatePreference";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Preference)
export class AggregatePreferenceResolver {
  @TypeGraphQL.Query(_returns => AggregatePreference, {
    nullable: false
  })
  async aggregatePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePreferenceArgs): Promise<AggregatePreference> {
    return getPrismaFromContext(ctx).preference.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

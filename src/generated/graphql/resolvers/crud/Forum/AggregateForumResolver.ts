import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateForumArgs } from "./args/AggregateForumArgs";
import { Forum } from "../../../models/Forum";
import { AggregateForum } from "../../outputs/AggregateForum";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Forum)
export class AggregateForumResolver {
  @TypeGraphQL.Query(_returns => AggregateForum, {
    nullable: false
  })
  async aggregateForum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateForumArgs): Promise<AggregateForum> {
    return getPrismaFromContext(ctx).forum.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumOrderByWithRelationInput } from "../../../inputs/ForumOrderByWithRelationInput";
import { ForumWhereInput } from "../../../inputs/ForumWhereInput";
import { ForumWhereUniqueInput } from "../../../inputs/ForumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateForumArgs {
  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  where?: ForumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForumOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ForumOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ForumWhereUniqueInput, {
    nullable: true
  })
  cursor?: ForumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

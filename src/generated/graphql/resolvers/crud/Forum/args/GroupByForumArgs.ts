import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumOrderByWithAggregationInput } from "../../../inputs/ForumOrderByWithAggregationInput";
import { ForumScalarWhereWithAggregatesInput } from "../../../inputs/ForumScalarWhereWithAggregatesInput";
import { ForumWhereInput } from "../../../inputs/ForumWhereInput";
import { ForumScalarFieldEnum } from "../../../../enums/ForumScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByForumArgs {
  @TypeGraphQL.Field(_type => ForumWhereInput, {
    nullable: true
  })
  where?: ForumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForumOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ForumOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "created_at" | "updated_at" | "roles" | "is_disabled">;

  @TypeGraphQL.Field(_type => ForumScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ForumScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForumCategoryOrderByWithAggregationInput } from "../../../inputs/ForumCategoryOrderByWithAggregationInput";
import { ForumCategoryScalarWhereWithAggregatesInput } from "../../../inputs/ForumCategoryScalarWhereWithAggregatesInput";
import { ForumCategoryWhereInput } from "../../../inputs/ForumCategoryWhereInput";
import { ForumCategoryScalarFieldEnum } from "../../../../enums/ForumCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByForumCategoryArgs {
  @TypeGraphQL.Field(_type => ForumCategoryWhereInput, {
    nullable: true
  })
  where?: ForumCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ForumCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForumCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "icon" | "name" | "description" | "created_at" | "updated_at" | "forum_id" | "is_disabled">;

  @TypeGraphQL.Field(_type => ForumCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ForumCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

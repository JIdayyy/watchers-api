import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCategoryCountOrderByAggregateInput } from "../inputs/ForumCategoryCountOrderByAggregateInput";
import { ForumCategoryMaxOrderByAggregateInput } from "../inputs/ForumCategoryMaxOrderByAggregateInput";
import { ForumCategoryMinOrderByAggregateInput } from "../inputs/ForumCategoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ForumCategoryOrderByWithAggregationInput", {
  isAbstract: true
})
export class ForumCategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  forum_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ForumCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ForumCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForumCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ForumCategoryMinOrderByAggregateInput | undefined;
}

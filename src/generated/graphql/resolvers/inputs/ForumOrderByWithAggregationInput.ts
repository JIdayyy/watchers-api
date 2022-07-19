import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForumCountOrderByAggregateInput } from "../inputs/ForumCountOrderByAggregateInput";
import { ForumMaxOrderByAggregateInput } from "../inputs/ForumMaxOrderByAggregateInput";
import { ForumMinOrderByAggregateInput } from "../inputs/ForumMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ForumOrderByWithAggregationInput", {
  isAbstract: true
})
export class ForumOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

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
  roles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ForumCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ForumCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForumMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ForumMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForumMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ForumMinOrderByAggregateInput | undefined;
}

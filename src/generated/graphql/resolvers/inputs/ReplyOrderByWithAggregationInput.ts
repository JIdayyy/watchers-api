import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReplyCountOrderByAggregateInput } from "../inputs/ReplyCountOrderByAggregateInput";
import { ReplyMaxOrderByAggregateInput } from "../inputs/ReplyMaxOrderByAggregateInput";
import { ReplyMinOrderByAggregateInput } from "../inputs/ReplyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReplyOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReplyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  picture?: "asc" | "desc" | undefined;

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
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  commentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReplyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReplyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReplyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReplyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReplyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReplyMinOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArticleCountOrderByAggregateInput } from "../inputs/ArticleCountOrderByAggregateInput";
import { ArticleMaxOrderByAggregateInput } from "../inputs/ArticleMaxOrderByAggregateInput";
import { ArticleMinOrderByAggregateInput } from "../inputs/ArticleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArticleOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArticleOrderByWithAggregationInput {
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
  content?: "asc" | "desc" | undefined;

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
  author_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArticleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArticleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArticleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArticleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArticleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArticleMinOrderByAggregateInput | undefined;
}
